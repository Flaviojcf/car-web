import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '@/app/components/CustomButton'

export function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-4 sm:px-16">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Web car logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          text="Sign In"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
          btnType={'button'}
        />
      </nav>
    </header>
  )
}
