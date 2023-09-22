import { MouseEventHandler } from 'react'

export default interface ISearchManufacturer {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}
