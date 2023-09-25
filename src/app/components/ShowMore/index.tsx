'use client'
import { IShowMore } from '@/app/interfaces/IShowMore'
import { useRouter } from 'next/navigation'
import { CustomButton } from '@/app/components/CustomButton'
import { updateSearchParams } from '@/utils/helpers/updateSearchParams'

export function ShowMore({ pageNumber, isNext }: IShowMore) {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathname = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathname, { scroll: false })
  }

  return (
    <div className="w-full flex-center gap-55 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          text="Show More"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}
