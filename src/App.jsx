import { LeftSide } from "./components/LeftSide";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { useData } from "./hook/useData";


function App() {
  const { data , gps, showModal, setShowModal, search, setSearch, setData, searchPressed} = useData();

  return (
    <div className="flex flex-wrap w-full h-full min-w-[330px] min-h-screen custon-xs:flex-col  bg-[#100E1D] ">

      {showModal && <Modal setShowModal={setShowModal} setSearch={setSearch} search={search} setData={setData} searchPressed={searchPressed}/>}

     <LeftSide data={data} gps={gps} setShowModal={setShowModal} />

      <Main data={data} />

    </div>
  );
}

export default App;
