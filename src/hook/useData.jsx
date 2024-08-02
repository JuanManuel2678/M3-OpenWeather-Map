import { useEffect, useState } from "react";

export const useData = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const BASE_Link = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "ae7f99ab707258411fafd5ac03530e3b";

  async function getData() {
    const rs = await fetch(
      `${BASE_Link}lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`
    );
    const rsJson = await rs.json();

    setData(rsJson);
  }

  async function searchPressed() {
    const rs = await fetch(
      `${BASE_Link}q=${search}&appid=${API_KEY}&units=metric`
    );
    const rsJson = await rs.json();

    setData(rsJson);
    setShowModal(false);
  }

  async function searchOptions(search) {
    const rs = await fetch(
      `${BASE_Link}q=${search}&appid=${API_KEY}&units=metric`
    );
    const rsJson = await rs.json();

    setData(rsJson);
    setShowModal(false);
  }

  const GPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        fetch(
          `${BASE_Link}lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(
            2
          )}&appid=${API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => setData(data));
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    showModal,
    setShowModal,
    setSearch,
    searchPressed,
    searchOptions,
    GPS,
  };
};
