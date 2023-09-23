'use client'
import { Combobox, Transition } from '@headlessui/react'
import ISearchManufacturer from '@/app/interfaces/ISearchManufacturer'
import Image from 'next/image'

export function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: ISearchManufacturer) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input" />
        </div>
      </Combobox>
    </div>
  )
}