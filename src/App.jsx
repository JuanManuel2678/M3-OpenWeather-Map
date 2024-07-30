import { Footer } from "./components/Footer";
import { LeftSide } from "./components/LeftSide";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { WeatherDay } from "./components/WeatherDay";
import { useData } from "./hook/useData";


function App() {
  const { data ,GPS, showModal, setShowModal, search, setSearch, setData, searchPressed} = useData();

  return (
    <div className="flex flex-wrap w-full h-full min-w-[330px] min-h-screen custon-xs:flex-col  bg-[#100E1D] ">

      {showModal && <Modal setShowModal={setShowModal} setSearch={setSearch} search={search} setData={setData} searchPressed={searchPressed}/>}

     <LeftSide data={data} setShowModal={setShowModal} GPS={GPS} />

      <section className=" text-white font-bold flex flex-col flex-wrap justify-between items-center p-8 bg-[#100E1D] mx-auto">
      <WeatherDay />
      <h4 className="text-left w-full font-bold text-[24px] pt-10 ">Today's Hightlights</h4>
      <Main data={data} />
      <Footer />
      </section>
      

    </div>
  );

}

export default App;
