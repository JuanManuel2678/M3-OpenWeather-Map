import { LeftSide } from "./components/LeftSide";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { useData } from "./hook/useData";
import { useForescast } from "./hook/useForescast";


function App() {
  const { data ,GPS, showModal, setShowModal, search, setSearch, setData, searchPressed} = useData();
  const { forecast } = useForescast()

  console.log('-----forecast-----')
  console.log(forecast)

  return (
    <div className="flex flex-wrap w-full h-full min-w-[330px] min-h-screen custon-xs:flex-col  bg-[#100E1D] ">

    {showModal && <Modal setShowModal={setShowModal} setSearch={setSearch} search={search} setData={setData} searchPressed={searchPressed}/>}

     <LeftSide data={data} setShowModal={setShowModal} GPS={GPS} />

     <Main data={data}/>

    </div>
  );

}

export default App;
