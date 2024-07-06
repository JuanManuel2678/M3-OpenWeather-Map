
export const Main = ({ data }) => {
    console.log(data)

  return (
    <section className="text-center text-white font-bold flex flex-col flex-wrap justify-between items-center p-8 bg-[#100E1D] h-screen  mx-auto">
        
            <div className="w-full flex justify-end gap-3 custom-md:justify-center ">
               <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">°C</div>
               <div className="text-[#100E1D] bg-[#E7E7EB] font-bold font-sans text-lg h-10 w-10 flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#EE7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300">°F</div>

            </div>

            <article className="flex flex-wrap justify-center items-center gap-4 text-center">
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">lunes</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">martes</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">mircoles</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">jueves</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[120px] h-[177px]">viernes</div>
            </article>   

            
            <article className="flex flex-col flex-wrap gap-7 pb-5"> 
                <h4 className="text-left font-bold text-[24px]">Today's Hightlights</h4>
             <div className="grid grid-cols-2 gap-7 justify-center">
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Wind status</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Humidity</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Visibility</div>
                <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Air Pressure</div>
             </div>
           </article>

           <footer className="flex justify-center items-center w-full text-[#88869D] font-[500] box-border">
                  <span>Create By <a href="https://github.com/JuanManuel2678/M3-OpenWeather-Map" target="_blank" rel="noopener noreferrer" >Juan Manuel Martinez</a> - Funval</span>
           </footer>
    </section>
  )
}


