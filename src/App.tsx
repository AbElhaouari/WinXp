import windows1 from "./assets/windows.png";
import network from "./assets/network.png";
import mycomputer from "./assets/mycomputer.png";
import MyComputer from "./components/MyComputer";
function App() {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  return (
    <div>
      <MyComputer />
      <div className="m-5 ">
        <div className="flex flex-col gap-8 ">
          <div>
            <button className="flex flex-col items-center text-white ">
              <img src={mycomputer} alt="" className="w-16 text-sm" />
              my computer
            </button>
          </div>
          <div>
            <button className="flex flex-col items-center text-white ">
              <img src={mycomputer} alt="" className="w-16 text-sm" />
              my computer
            </button>
          </div>
          <div>
            <button className="flex flex-col items-center text-white ">
              <img src={mycomputer} alt="" className="w-16 text-sm" />
              my computer
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 bg-gradient-to-t from-blue-700 from-70% via-blue-700 via-80% to-blue-500 to-90% text-center  w-full flex ">
        {/* task bar */}
        <button className="bg-green-600 p-1 w-28 rounded-tr-md rounded-br-2xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]  flex gap-3">
          <img src={windows1} alt="" className="w-6 " />
          <div className="text-white font-semibold font-sans">start</div>
        </button>
        <div className="absolute right-0 bottom-0 p-1  text-center bg-gradient-to-t from-blue-600 from-70% via-blue-600 via-80% to-blue-500 to-90% flex ">
          <div className="">
            <img src={network} alt="" className="w-4" />{" "}
          </div>
          <div className="text-white pl-3 pr-3 text-sm">{showTime}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
