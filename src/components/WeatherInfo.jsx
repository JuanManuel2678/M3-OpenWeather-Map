export const WeatherInfo = ({data}) => {

  return (
    <article className="flex md:flex-col flex-wrap gap-7 pb-5 pt-10 md:pt-0 font-raleway">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center">

        <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">

          <h3 className="text-sm">Wind status</h3>

        <p className="text-3xl p-3 flex gap-4"><span className='text-6xl font-bold'><h5>{data?.wind && data?.wind?.speed}</h5> </span> m/s</p>
        <div className='flex pt-3 text-sm'>
          <img src='/direction.svg' alt="Locate" className="w-5 h-5 relative top-[0px] right-1"  />
          <p>nn</p>
        </div>
        {/* // style={{ transform: getRotation(windDirection) }} */}
        </div>

        <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between pt-5 custom-sm:w-[100%]">

        <h3 className="text-sm">Humidity</h3>

        <div className='flex flex-col items-center pt-5'>
          <p className="text-3xl"><span className='text-6xl font-bold'>{data?.main && data?.main?.humidity}</span>%</p>
        </div>

        <div  className="flex flex-col w-full pt-5 px-4">
        <div className="flex justify-between w-full">
          <span className="text-base font-medium text-[#A09FB1]">0</span>
          <span className="text-base font-medium  text-[#A09FB1]">50</span>
          <span className="text-sm font-medium  text-[#A09FB1]">100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#E7E7EB]">
          <div className="bg-[#FFEC65] h-2.5 rounded-full" style={{width: `${data?.main && data?.main?.humidity}%`}}></div>
        </div>
        <div className="flex justify-end w-full ">
          <span className="text-sm font-medium  text-[#A09FB1] ">%</span>
        </div>
        </div>
        
        </div>

        <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">
        <h3 className="text-sm">Visibility</h3>
        <p className="text-3xl"><span className='text-6xl font-bold'>{(data && data?.visibility / 1000).toFixed(1)}</span> km</p>
        </div>
        
        <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">
        <h3 className="text-sm">Air Pressure</h3>
        <p className="text-3xl"><span className='text-6xl font-bold'>{data?.main && data?.main?.pressure}</span> hPa</p>
        </div>
      </div>
    </article>
  );
};
