

export const LeftSide = ({data}) => {
  console.log(data)
  return (
   

    <div className="w-[459px] h-[1060px] bg-[#1E213A] text-white font-raleway bg-[url('doud-background.svg')]">
      
      <header className="flex justify-between h-[100px] ">

            <button class="bg-[#6E707A] text-[16px] w-[161px] h-[40px] hover:bg-[#E7E7EB] hover:text-[#555555] transition duration-300 active:bg-[#b5b5bb] focus:outline-none ml-[64px] mt-[53px]">Search for places</button>

          <figure className="h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 p-[9px] mr-[54px] mt-[53px]">
             <img src="/image/center.svg" alt="icono centrar" />
          </figure>
            
      </header>

    </div>
  )
}

export default LeftSide

{/* <button className="borde-2 border-black bg-[#6e707A]  ml-[46px] mt-[42px] text-[16px] px-2 py-1 text-[#E7E7EB]">Search for places </button> */}

{/* <div "h-[40px] w-[40px] bg-[#6E707A] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#b5b5bb] transition duration-300 p-[9px]"> */}

