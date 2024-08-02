import { Footer } from "./Footer";
import { WeatherDay } from "./WeatherDay";
import { WeatherInfo } from "./WeatherInfo";

export const Main = ({ data, forecast }) => {

  return (
   
    <section className=" text-white font-bold flex flex-col flex-wrap justify-between items-center p-8 bg-[#100E1D] mx-auto w-screen md:w-[880px]">

      <div className="w-full hidden md:flex justify-end gap-3 custom-md:justify-center ">

        <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">
          °C
        </div>

        <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">
          °F
        </div>

      </div>

      <WeatherDay forecast={forecast} />

      <h4 className="text-left w-full font-bold text-[24px] pl-4 md:pl-20  pt-10 ">
        Today's Hightlights
      </h4>

      <WeatherInfo data={data} />

      <Footer />

    </section>
  );
};
