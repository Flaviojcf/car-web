'use client'
import { SearchManufacturer } from '@/app/components/SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function SearchButton({ otherCLasses }: { otherCLasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherCLasses}`}>
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
    router.push(newPathname)
  }

  return (
    <form className="searchbar mb-4" onSubmit={handleSearch}>
      <div className="searchbar__item dark:text-gray-200">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherCLasses="sm:hidden" />
      </div>
      <div className="searchbar__item dark:text-gray-200">
        <Image
          src="/model-icon.png"
          alt="Car model"
          width={25}
          height={25}
          className="absolut w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input dark:bg-gray-50 transition-colors duration-200"
        />
        <SearchButton otherCLasses="sm:hidden" />
      </div>
      <SearchButton otherCLasses="max-sm:hidden" />
    </form>
  )
}
