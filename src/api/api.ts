import ICarCard from '@/app/interfaces/ICarCard'
import { IFilter } from '@/app/interfaces/IFilter'
import axios from 'axios'

export async function fetchCars(filters: IFilter): Promise<ICarCard[]> {
  const { fuel, limit, manufacturer, model, year } = filters

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
  try {
    const response = await axios.request({
      method: 'GET',
      url,
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
      },
    })

    return response.data as ICarCard[]
  } catch (error) {
    console.error(error)
    throw error
  }
}
