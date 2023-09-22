import { MouseEventHandler } from 'react'

export default interface ICustomButton {
  text: string
  containerStyle?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType: 'button' | 'submit'
}
