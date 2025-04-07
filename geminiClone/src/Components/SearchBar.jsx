import React, { useContext } from 'react'
import { LuImagePlus } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import './SearchBar.css'
import { Context } from '../Context/Context';
import { IoSend } from "react-icons/io5";

function SearchBar() {

  const { onSent, input, setInput, setShowResult } = useContext(Context);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleOnKeyDown = (e) => {
    if (e.key == 'Enter') { onSent(input); setShowResult(true); setInput("");}
  }

  const handleOnClick=()=>{
    onSent(input); setShowResult(true);setInput("");
  }

  return (
    <div className="container">
      <div className='icon-container '>
        <LuImagePlus className='image-icon' /></div><input type="text" className="searchInput" placeholder='Ask Gemini' onChange={(e) => handleOnChange(e)} onKeyDown={(e) => handleOnKeyDown(e)} value={input}
      />

      {input == "" ?
        <div className='icon-container'><FaMicrophone className='microphone-icon' /></div>
        : <div className='icon-container icon-container-onsend-icon'><IoSend className='onsend-icon' onClick={handleOnClick}/></div>
      }
    </div>
  )
}

export default SearchBar
