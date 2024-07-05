

export const modal = () => {
  return (
    <aside className="w-[459px] max-h-[1050px] min-h-[800px] h-screen bg-[#1E213A] text-white font-raleway flex flex-col justify-between">
      
    <header className="flex justify-between h-[100px]">

       <div>
        <img src="" alt="" />
        <input type="text" />
        </div> 

        <button></button>
          
    </header>

    <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" >
          <p>London</p>
          <img src="/public/image/vector.svg" alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" >
          <p>Barcelona</p>
          <img src="/public/image/vector.svg" alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300"  >
          <p>Long Beach</p>
          <img src={vector} alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>

    
    

  </aside>
  )
}

export default modal


// onClick={() => handleSearch('London')}
// onClick={() => handleSearch('Barcelona')} 
// onClick={() => handleSearch('Long Beach')}