import { useEffect, useState } from "react"

export const useData = () => {
    const [data, setData] = useState([])

    async function getData () {
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b`)
        const rsJson = await rs.json()

       console.log(rsJson) 
    }

   useEffect(() => {
    getData()
   }, []) 

   return { data }
}


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ae7f99ab707258411fafd5ac03530e3b

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ae7f99ab707258411fafd5ac03530e3b

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b