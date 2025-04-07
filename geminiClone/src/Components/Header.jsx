import React from 'react'
import './Header.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  const onClickDropDown = () => {

  }

  return (
    <div className="container-header">
      <div className="dropDown" onClick={onClickDropDown}>
        <span className='font-gemini'>Gemini</span><IoMdArrowDropdown className="dropDownSvg" />
        <span className='version-font'>1.5 Flash</span>
      </div>
      <div className="right-half">
      <div className="Gemini-Advance"><SiGooglegemini className='gemini-advance-icon'/><span> Try Gemini Advanced</span></div>
      <CgMenuGridO className='grid-icon' />
      <div className='profile-photo'></div>
      </div>



    </div>
  )
}

export default Header
