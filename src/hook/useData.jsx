import { useEffect, useState } from "react"

export const useData = () => {
    const [data, setData] = useState([])


    function gps () {

        function success(position) {
            console.log((position.coords.latitude).toFixed(2),( position.coords.longitude).toFixed(2));
          }
          
          function error() { 
            alert("Sorry, no position available.");
          }
          
          const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
          };
          
          const watchID = navigator.geolocation.watchPosition(success, error, options);
    }


    async function getData () {
        const rs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b`)
        const rsJson = await rs.json()

        

       setData(rsJson)
        console.log(rsJson)
    }

   useEffect(() => {
    getData()
   }, []) 

   return { data, gps }
}


// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae7f99ab707258411fafd5ac03530e3b
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ae7f99ab707258411fafd5ac03530e3b

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ae7f99ab707258411fafd5ac03530e3b

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae7f99ab707258411fafd5ac03530e3b