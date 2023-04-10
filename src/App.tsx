import { Hiro } from "./components/Hiro";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Hiro />
      <div className="xl:px-80 lg:px-48 md:px-40 sm:px-24 px-10 py-5 space-y-5">
        <form>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              className="w-full py-1 px-2 shadow-sm h-10 sm:h-12 text-md sm:text-xl  outline-none border border-[#059669] font-light text-gray-600 cursor-pointer active:border-[#75eac5] hover:border-[#75eac5]"
              type="text"
              name="task"
              placeholder="Preciser la tache"
            />
            <button
              type="button"
              className="font-bold w-full sm:w-60 text-white p-0  flex items-center justify-center text-3xl bg-[#059669] hover:bg-[#1fb888] active:bg-[#059669] cursor-pointer  active:text-white"
            >
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
