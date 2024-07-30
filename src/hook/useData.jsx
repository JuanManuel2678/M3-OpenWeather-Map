import { useEffect, useState } from "react"

export const useData = () => {
    const [showModal, setShowModal ] = useState(false)
    const [data, setData] = useState({})
    const [search, setSearch] = useState("")

    const BASE_Link = 'https://api.openweathermap.org/data/2.5/weather?'
    const API_KEY = 'ae7f99ab707258411fafd5ac03530e3b'
    

    async function getData () {
        const rs = await fetch(`${BASE_Link}lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`)
        const rsJson = await rs.json()

        setData(rsJson)
    }

    async function  searchPressed () {
        const rs = await fetch(`${BASE_Link}q=${search}&appid=${API_KEY}&units=metric`)
        const rsJson = await rs.json()

      setData(rsJson)
      setShowModal(false)
      console.log(rsJson)
    }

    // latitud 44.34 longitud 10.99  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en
    const GPS = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude)
          fetch(`${BASE_Link}lat=${(latitude).toFixed(2)}&lon=${(longitude).toFixed(2)}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => setData(data));
        });
      }
    };

   useEffect(() => {
    getData()
   }, []) 

   return { 
    data,
    setData,
    showModal,
    setShowModal,
    search,
    setSearch,
    searchPressed,
    GPS,
  }
}


// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae7f99ab707258411fafd5ac03530e3b
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ae7f99ab707258411fafd5ac03530e3b

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ae7f99ab707258411fafd5ac03530e3b

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b