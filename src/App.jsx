import { LeftSide } from "./components/LeftSide";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { useData } from "./hook/useData";

function App() {
  const { data , gps } = useData();

  return (
    <div className="flex flex-wrap w-full h-full min-w-[330px] min-h-screen custon-xs:flex-col  bg-[#100E1D] ">
      <Modal />
      <LeftSide data={data} gps={gps}/>
      <Main data={data} />
    </div>
  );
}

export default App;
