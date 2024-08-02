import { useEffect, useState } from "react";

export const useForescast = () => {
  
  const [forecast, setForecast] = useState([]);

  const BASE_Link = "https://api.openweathermap.org/data/2.5/forecast?";
  const API_KEY = "ae7f99ab707258411fafd5ac03530e3b";

  async function getForescat() {
    const rs = await fetch(`${BASE_Link}lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`);
    const rsJson = await rs.json();

    console.log(rsJson.list);
    setForecast(rsJson.list);
  }

  useEffect(() => {
    getForescat();
  }, []);

  return { forecast };
};
