import React from "react";
import DropDown from "../DropDowns/DropDown";

function RightLayout() {
  return (
    <div className="h-screen w-screen text-center flex flex-col justify-between">
      <DropDown />
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="MessageChatGPT... "
          className="max-w-3xl h-16 p-6 relative left-1/4 bottom-3 border-2 rounded-lg text-black text-base font-medium"
        />
        <h6 className="mb-1 p-1">
          {" "}
          ChatGPT donot make mistake but you always does{" "}
        </h6>
      </div>
    </div>
  );
}

export default RightLayout;
