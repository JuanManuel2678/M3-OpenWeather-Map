import LeftSide from "./components/LeftSide"
import { useData } from "./hook/useData"

function App() {
  const { data } = useData()
 

  return (
    <>
     {/* <h1 className="text-3xl font-bold text-[#0955c7] text-left p-4" data={data}>
      Hello world!
    </h1> */}
    <LeftSide data={data} />
    </>
  )
}

export default App
