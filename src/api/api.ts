import ICarCard from '@/app/interfaces/ICarCard'
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
}

export async function fetchCars(): Promise<ICarCard[]> {
  try {
    const response = (await axios.request(options)).data

    return response as ICarCard[]
  } catch (error) {
    console.error(error)
    throw error
  }
}
