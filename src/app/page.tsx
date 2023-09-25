import { fetchCars } from '@/api/api'

import { SearchBar } from '@/app/components/SearchBar'
import { IHome } from './interfaces/IHome'
import { HeroSection } from './sections/HeroSection'
import { CustomFilter } from './components/CustomFilter'
import ICarCard from './interfaces/ICarCard'
import { CarCard } from './components/CarCard'
import { ShowMore } from './components/ShowMore'
import { fuels, yearsOfProduction } from '@/utils/mock/constants'

export default async function Home({ searchParams }: IHome) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold dark:text-white transition-colors duration-200">
            Car Catalogue
          </h1>
          <p className="dark:text-gray-200">Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-contaienr"></div>

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: ICarCard, index) => (
                <CarCard {...car} key={`${car.model}-${index}`} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold dark:text-gray-200">
              Oops, no results
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}
