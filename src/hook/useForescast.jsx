import { useEffect, useState } from "react"


export const useForescast = () => {

    const [forecast, setForecast] = useState([])

        const BASE_Link = 'https://api.openweathermap.org/data/2.5/forecast?'
        const API_KEY = 'ae7f99ab707258411fafd5ac03530e3b'

        async function getForescat () {
            const rs = await fetch(`${BASE_Link}lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`)
            const rsJson = await rs.json()

            console.log(rsJson.list.dt)
            setForecast(rsJson.list)
        }

    useEffect(() => {
        getForescat()
    },[])

  return { forecast }
}

//Función para crear la tarjeta del clima del día de hoy y la predicción a 5 días
// const createWeatherCard = (cityName, weatherItem, index) => {
//     const { dt_txt, main, wind, weather } = weatherItem;
//     const date = new Date(dt_txt);
//     const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Cambiamos el formato de fecha devuelta por la API
//     const temperature = (main.temp - 273.15).toFixed(0);
