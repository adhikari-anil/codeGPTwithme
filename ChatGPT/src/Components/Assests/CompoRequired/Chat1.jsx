import React from "react";

function Chat1() {
  return (
    <div className=" w-1/2 h-12 flex flex-row relative left-10 top-10 border-3 rounded-lg">
      <div className="w-fit">
        <button className=" rounded-full w-7 h-7 relative left-2 top-2 border-2 bg-blue-300 text-base ring-2">
          {" "}
          A{" "}
        </button>
      </div>
      <div className="w-fit relative top-1 left-5">
        <div className="w-fit flex justify-start font-semibold text-lg">
          {" "}
          You{" "}
        </div>
        <div className="w-96 flex justify-start overflow-hidden font-medium text-base">
          {" "}
          Welcome to my yard guys{" "}
        </div>
      </div>
    </div>
  );
}

export default Chat1;
