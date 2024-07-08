import lupa from "/public/lupa.svg"

export const Modal = ({setShowModal, setSearch, searchPressed}) => {



  return (
    <div className="w-[459px] h-full max-h-[1050px] min-h-[800px] absolute bg-[#1E213A] text-white font-raleway p-11 gap-6 border-2 border-black">

      <div className='w-full flex justify-end '>

        <button className=" hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300 rounded-full" onClick={() => setShowModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#E7E7EB" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <header className="flex gap-2 w-[366px] h-[48px] mt-10">

        <div className=" flex gap-2 p-2 w-[268px] h-[48px] border-2 border-[grey]">
          <img src={lupa} alt="icon lupa" className="w-[24px] h-[24px] top-1/2" />
          <input 
          type="text" 
          placeholder="Search location"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#1E213A] focus:outline-none focus:border-[#E7E7EB] transition duration-300 " />
        </div>

        <button onClick={searchPressed} className=" w-[86px] h-[48px] bg-[#3C47E9] font-semibold text-base hover:bg-[#E7E7EB] hover:text-[#555555] active:bg-[#B5B5BB] transition duration-300-">Search</button>
      </header>

      <div className="flex flex-col gap-4 mt-6">

        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" >
          <p>London</p>
          <img src="/public/vector.svg" alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" >
          <p>Barcelona</p>
          <img src="/public/vector.svg" alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300"  >
          <p>Long Beach</p>
          <img src="/public/vector.svg" alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

      </div>

    </div>
  )
}

export default Modal


// onClick={() => handleSearch('London')}
// onClick={() => handleSearch('Barcelona')}
// onClick={() => handleSearch('Long Beach')}