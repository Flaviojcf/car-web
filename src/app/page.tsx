import { HeroSection } from '@/app/Sections/HeroSection'
import { SearchBar } from '@/app/components/SearchBar'
import { CustomFilter } from '@/app/components/CustomFilter'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-contaienr">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
