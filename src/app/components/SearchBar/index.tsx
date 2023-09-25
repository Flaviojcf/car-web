'use client'
import { SearchManufacturer } from '@/app/components/SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}
export function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const router = useRouter()

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (manufacturer === '' && model === '') {
      return alert('Please fil in the search bar')
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname, { scroll: false })
  }

  return (
    <form className="searchbar z-20" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input dark:bg-gray-50 transition-colors duration-200 dark:mr-4"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}
