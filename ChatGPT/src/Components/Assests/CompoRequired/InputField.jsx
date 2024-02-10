import React, { useState } from 'react'

function InputField() {

    const [isInputText, setInputText] = useState("");

    const handleChange = (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
  return (
    <input
        type="text"
        value={isInputText}
        onChange={handleChange}
        placeholder="MessageChatGPT... "
        className="max-w-3xl h-14 p-6 relative left-1/4 top-2 rounded-lg text-black text-base font-medium"
    />
  )
}

export default InputField