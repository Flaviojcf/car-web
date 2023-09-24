import { fetchCars } from '@/api/api'
import { HeroSection } from '@/app/Sections/HeroSection'
import { SearchBar } from '@/app/components/SearchBar'
import { CustomFilter } from '@/app/components/CustomFilter'
import { CarCard } from '@/app/components/CarCard'
import ICarCard from '@/app/interfaces/ICarCard'
import { IFilter } from '@/app/interfaces/IFilter'
import { fuels, yearsOfProduction } from '@/utils/mock/constants'
import { ShowMore } from '@/app/components/ShowMore'

export default async function Home({ ...searchParams }: IFilter) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="">
      <HeroSection />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container" id="discover">
          <h1 className="text-4xl font-extrabold dark:text-white transition-colors duration-200">
            Car Catalogue
          </h1>
          <p className="dark:text-gray-200">Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-contaienr"></div>
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: ICarCard, index) => (
                <CarCard {...car} key={`${car.model}-${index}`} />
              ))}
            </div>
            <ShowMore />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}
