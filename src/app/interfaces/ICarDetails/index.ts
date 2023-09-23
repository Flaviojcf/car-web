import ICarCard from '@/app/interfaces/ICarCard'

export default interface ICarDetails {
  isOpen: boolean
  closeModal: () => void
  car: ICarCard
}
