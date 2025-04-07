import React, { useContext } from 'react'
import './SideBar.css'
import { LuMenu } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { TbDiamond } from "react-icons/tb";
import { IoHelpCircleOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { Context } from '../Context/Context';
import { LuMessageSquare } from "react-icons/lu";
function SideBar() {

  const { toggle, setToggle } = useContext(Context);
  const handleOnClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (

    <div className={`sideBar-container ${toggle ? "toggle" : null}`}>

      <div className={`${toggle ? "top-button-container-after-toggle" :"top-button-container "}`}>
        <div className={`${toggle ? "top-button-after-toggle" :"top-button "}`}><LuMenu className='toggle-menu-icon'
          onClick={handleOnClick}
        /></div>
        <div className={`${toggle ? "top-button-after-toggle top-button-2" :"top-button top-button-2 "}`}>
          <FaPlus className='new-chat-icon' />{toggle && <span>New Chat</span>}</div>
      </div>

      { toggle && <div className='recent-section'><span>Recent</span>
        <span><LuMessageSquare className='recent-icon'/>Recent</span>
        <span><LuMessageSquare className='recent-icon'/>Recent</span>
        <span><LuMessageSquare className='recent-icon' />Recent</span>
      
      </div>}

      <div className={`bottom-button-container ${toggle ? "button-container-after-toggle" : null}`}>
        <div className={`${toggle ? "botton-cards-after-toggle" :"bottom-button"}`}> <TbDiamond className='bottom-icon' />
        
        {toggle && <span>Gem manager</span>}
        
        </div>
        <div className={`${toggle ? "botton-cards-after-toggle" : "bottom-button"}`}><IoHelpCircleOutline className='bottom-icon' />{toggle && <span>Help</span>}</div>
        <div className={` ${toggle ? "botton-cards-after-toggle" :"bottom-button"}`}><LuHistory className='bottom-icon' />{toggle && <span>Activity</span>}</div>
        <div className={`${toggle ? "botton-cards-after-toggle" :"bottom-button"}`}><MdOutlineSettings className='bottom-icon' />{toggle && <span>Setting</span>}</div>
      </div>

    </div>
  )
}

export default SideBar
