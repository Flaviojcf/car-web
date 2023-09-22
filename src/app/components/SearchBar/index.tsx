'use client'
import { SearchManufacturer } from '@/app/components/SearchManufacturer'
import { useState } from 'react'

export function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>('')
  function handleSearch() {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}
