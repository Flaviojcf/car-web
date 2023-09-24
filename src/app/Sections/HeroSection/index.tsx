'use client'

import Image from 'next/image'
import { CustomButton } from '@/app/components/CustomButton'

export function HeroSection() {
  function handleScroll() {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title select-none dark:text-white transition-colors duration-200">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle select-none dark:text-gray-200 transition-colors duration-200">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          text="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10 select-none"
          handleClick={handleScroll}
          btnType={'button'}
        />
      </div>
      <div className="hero__image-container select-none">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  )
}
