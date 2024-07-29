import { useEffect, useState } from "react"

export const useData = () => {
    const [showModal, setShowModal ] = useState(false)
    const [data, setData] = useState({})
    const [search, setSearch] = useState("")
   
    async function gps () {

       function success(position) {
            console.log((position.coords.latitude).toFixed(2),( position.coords.longitude).toFixed(2));
          }
          const rs = await fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${(position.coords.latitude).toFixed(2)}&lon=${(position.coords.longitude).toFixed(2)}&appid=ae7f99ab707258411fafd5ac03530e3b`)
          const rsJson = await rs.json()
          
          function error() { 
            alert("Sorry, no position available.");
          }
          
          const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
          };
          
          const watchID = navigator.geolocation.watchPosition(success, error, options);
          setData(rsJson)
    }

    async function getData () {
        const rs = await fetch(` https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b&units=metric`)
        const rsJson = await rs.json()

      
        setData(rsJson)
        console.log(rsJson)
    }

    const searchPressed = async () => {
     const rs = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ae7f99ab707258411fafd5ac03530e3b`)
        const rsJson = await rs.json()
      setData(rsJson)
      setShowModal(false)
      console.log(rsJson)
    }

   useEffect(() => {
    getData()
   }, []) 

   return { 
    data,
    setData,
    gps,
    showModal,
    setShowModal,
    search,
    setSearch,
    searchPressed,
  }
}


// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae7f99ab707258411fafd5ac03530e3b
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ae7f99ab707258411fafd5ac03530e3b

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ae7f99ab707258411fafd5ac03530e3b

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b