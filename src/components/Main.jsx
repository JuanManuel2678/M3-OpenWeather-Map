
export const Main = ({ data }) => {
console.log(data)

return (
  <section >
      
          <article className="flex flex-col flex-wrap gap-7 pb-5"> 
             
           <div className="grid grid-cols-2 gap-7 justify-center">
            
              <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Wind status
               <div>
               </div>
              </div>
              <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[204px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Humidity</div>
              <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Visibility</div>
              <div className="border-2 border-black bg-[#1E213A] p-4 w-[328px] h-[158px] flex flex-col items-center justify-between py-5 pb-8 custom-sm:w-[100%]">Air Pressure</div>

           </div>
         </article>


  </section>
)
}