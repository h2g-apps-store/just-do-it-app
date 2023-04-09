import { Hiro } from "./components/Hiro";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Hiro />
      <div className="px-96 py-5 space-y-5 bg-gray-100 ">
        <form action="#0">
          <div className="flex gap-3 ">
            <input
              className="w-full py-1 px-2 shadow-sm h-12 text-xl  outline-none border border-[#059669] font-light text-gray-600 cursor-pointer active:border-[#75eac5] hover:border-[#75eac5]"
              type="text"
              name="task"
              placeholder="Preciser la tache"
            />
            <button className="font-bold w-60 text-white p-0  flex items-center justify-center text-3xl bg-[#059669] hover:bg-[#75eac5] active:bg-[#059669] cursor-pointer hover:text-[#059669] active:text-white">
              +
            </button>
          </div>
        </form>
        <hr />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
