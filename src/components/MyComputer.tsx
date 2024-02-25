import React from "react";

export default function MyComputer() {
  return (
    <div className="w-2/3 h-3/4  absolute bg-white border-2 border-blue-700 rounded">
      <div className="w-full h-10 bg-blue-700 p-2 flex justify-between">
        <div>title</div>
        <div className="flex gap-1 ">
          <div>
            <button className="border-2 w-6 rounded border-white text-white font-extrabold">
              _
            </button>
          </div>
          <div>
            <button className="border-2 w-6 rounded border-white text-white font-extrabold">
              _
            </button>
          </div>
          <div>
            <button className="border-2 w-6 bg-red-500 rounded border-white text-white font-extrabold">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
