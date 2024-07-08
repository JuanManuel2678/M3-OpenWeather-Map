import center from '/public/center.svg'
import location from '/public/location.svg'

export const LeftSide = ({data, gps, setShowModal }) => {
console.log(data)

  return (
   
    <aside className="w-[459px] max-h-[1050px] min-h-[800px] h-screen bg-[#1E213A] text-white font-raleway flex flex-col justify-between">
      
      <header className="flex justify-between h-[100px]">

            <button class="bg-[#6E707A] text-[16px] w-[161px] h-[40px] hover:bg-[#E7E7EB] hover:text-[#555555] transition duration-300 active:bg-[#b5b5bb] focus:outline-none ml-[64px] mt-[53px]" onClick={() => setShowModal(true)}>Search for places</button>

          <figure className="h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 p-[9px] mr-[54px] mt-[53px]" onClick={gps}>
             <img src={center} alt="icono centrar" />
          </figure>
            
      </header>

      <figure className="h-[295px] w-full bg-cover bg-no-repeat bg-center p-16 mt-6 bg-[url('/public/cloud-background.svg')] flex justify-center items-center ">
        <img src={`/public/${data.weather[0].icon}.png`} alt="icon weather" />
      </figure>

      <div className="bg-trasnparent flex justify-center items-center h-[150px] w-full relative -mt-4">
          <h2 className="text-[5rem] font-[500] text-white">{data.main.temp}</h2>
          <span className="text-[#88869D] text-5xl font-normal font-sans">
            °F
          </span>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-semibold text-[#88869D] pt-6">
          {data.weather[0].main}
        </h2>
        <h4 className="text-base font-semibold text-[#88869D]">{data.weather[0].description}</h4>
      </div>

      <footer className="w-full flex flex-col gap-1 justify-center items-center text-[#88869D] pt-6 mb-6">
      <span className="flex gap-3"> Today <span>*</span> Thu, 4 Jul </span>
      <span className="flex gap-2"></span>
      <span className="flex gap-2">
        <img src={location} alt="icono location"className="w-[14px]"/>
       {data.name}
      </span>
      </footer>
      

    </aside>
  )
}

export default LeftSide
