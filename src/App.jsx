import { LeftSide } from "./components/LeftSide";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { useData } from "./hook/useData";

function App() {
  const { data , gps, modal , setModal  } = useData();

  return (
    <div className="flex flex-wrap w-full h-full min-w-[330px] min-h-screen custon-xs:flex-col  bg-[#100E1D] ">
      {modal && <Modal onClose={(() => setModal(false))} />}
      <LeftSide data={data} gps={gps} setModal={setModal}/>
      <Main data={data} />
    </div>
  );
}

export default App;
