'use client'

import ICustomButton from '@/app/interfaces/ICustomButton'

export function CustomButton({
  text,
  containerStyle,
  handleClick,
}: ICustomButton) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{text}</span>
    </button>
  )
}
