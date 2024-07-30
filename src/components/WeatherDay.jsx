export const WeatherDay = () => {
  return (
    <>
      <div className="w-full flex justify-end gap-3 custom-md:justify-center ">
        <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">
          °C
        </div>
        <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">
          °F
        </div>
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-4 text-center">
        <li className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">
          lunes
        </li>
        <li className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">
          martes
        </li>
        <li className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">
          mircoles
        </li>
        <li className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">
          jueves
        </li>
        <li className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">
          viernes
        </li>
      </ul>
    </>
  );
};


