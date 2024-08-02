export const WeatherDay = ({ forecast }) => {
  console.log(forecast);

  const weekData = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  const week = new Date(forecast[0] && forecast[0].dt * 1000);
  console.log(week.toLocaleDateString("en-GB", weekData));
  // console.log((forecast[0] && forecast[0].dt_txt).slice(0, 10))


  return (
    <ul className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-4 text-center pt-10 md:pt-0 font-raleway">
      {forecast &&
        forecast.slice(0, 5).map((item) => (
          <li
            key={item.index}
            className="flex flex-col gap-2 justify-between border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]"
          >
            <h3 className="text-[16px] font-medium text-[#E7E7EB]">
              {new Date(item.dt * 1000).toLocaleDateString("en-GB", weekData)}
            </h3>
            <figure className="h-[62px] w-full ">
              <img
                src={`/${item?.weather[0]?.icon}.png`}
                alt="icon weather day"
                className="h-full w-full object-contain"
              />
            </figure>
            <div className="flex justify-between">
              <div className="text-[16px] font-medium text-[#E7E7EB]">
                {Math.trunc(item?.main?.temp_max)} °C
              </div>
              <div className="text-[16px] font-medium text-[#A09FB1]">
                {Math.trunc(item?.main?.temp_min)} °C
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};
