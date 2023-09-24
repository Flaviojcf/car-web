'use client'
import { useState } from 'react'
import Image from 'next/image'
import ICarCard from '@/app/interfaces/ICarCard'
import { calculateCarRent } from '@/utils/helpers/calculateCarRent'
import { CustomButton } from '@/app/components/CustomButton'
import { CarDetails } from '@/app/components/CarDetails'

export function CarCard({ ...carCard }: ICarCard) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const carRent = calculateCarRent(carCard.city_mpg, carCard.year)

  return (
    <div className="car-card group dark:bg-slate-500 transition-colors duration-200">
      <div className="car-card__content dark:text-gray-300 transition-colors duration-200">
        <h2>
          {carCard.make} {carCard.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold dark:text-gray-300 transition-colors duration-200">
        <span className="self-start text-[14px] font-semibold dark:text-gray-300 transition-colors duration-200">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex grouo-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="Steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px] dark:text-gray-300 transition-colors duration-200">
              {carCard.transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="Tire" width={20} height={20} />
            <p className="text-[14px] dark:text-gray-300 transition-colors duration-200">
              {carCard.drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="Gas" width={20} height={20} />
            <p className="text-[14px] dark:text-gray-300 transition-colors duration-200">
              {carCard.city_mpg}MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            text="View More"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            btnType={'button'}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={carCard}
      />
    </div>
  )
}
