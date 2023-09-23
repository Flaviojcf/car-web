import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
  params: { model: 'corolla' },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
}

export async function fetchCars() {
  try {
    const response = (await axios.request(options)).data
    return response
  } catch (error) {
    console.error(error)
  }
}
