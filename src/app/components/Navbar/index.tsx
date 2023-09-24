'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '@/app/components/CustomButton'
import { CiDark } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { useState, useEffect } from 'react'

export function Navbar() {
  const initialTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState<string>(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="w-full absolute z-10 dark:bg-gray-900 transition-colors duration-200">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-4 sm:px-16">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logoBlue.svg"
            alt="Web car logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          text="Sign In"
          containerStyle="rounded-full min-w-[130px] bg-primary-blue text-white"
          btnType="button"
        />

        <div onClick={handleThemeSwitch}>
          <CiDark
            size={30}
            className={`cursor-pointer ${
              theme === 'dark' ? 'hidden' : 'flex'
            } fill-primary-blue`}
          />
          <MdDarkMode
            size={30}
            className={`cursor-pointer ${
              theme === 'dark' ? 'flex' : 'hidden'
            } fill-primary-blue`}
          />
        </div>
      </nav>
    </header>
  )
}
