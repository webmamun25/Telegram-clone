import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import chat from '../../../assets/images/chat.png'
import { MdGroup, MdNightlight } from 'react-icons/md';
import { FaVolumeLow } from "react-icons/fa6";
import { IoMdContact, IoMdSettings } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaBookmark } from 'react-icons/fa';
import { ToggleContext } from '../../../Context/toogleContext';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toogle, setToogle, handleToogle,small }=useContext(ToggleContext)
  
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='lg:hidden bg-[#24A1DE] '>
      {/* <bg-base-100></bg-base-100> */}
        <div className="navbar  "> 
          <div className="navbar-start flex justify-between items-center" style={{width:"0px" }} >
            <div className="">
             
              <div className="offcanvasbutton">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg   text-white   disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleOffcanvas}
            >
              <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>



            </button>

            <div
              className={`hs-overlay ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] ${toogle ? "bg-black text-white" : "bg-white"} border-e dark:bg-neutral-800 dark:border-neutral-700`}
              tabIndex="-1"
            >
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <div className='flex flex-col'>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-24 rounded-full">
                    <span className="text-3xl">D</span>
                  </div>
                </div>
                <div><p>Mamun</p></div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  onClick={toggleOffcanvas}
                >
                  <span className="sr-only">Close modal</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><MdGroup /></div>
                  <div>New Group</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div>
                  <FaVolumeLow />
</div>
                  <div>New Channel</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoMdContact /></div>
                  <div>Contacts</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoCallSharp /></div>
                  <div>Calls</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><FaBookmark /></div>
                  <div>Saved Messages</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoMdSettings /></div>
                  <div>Settings</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center justify-items-stretch ">

                  <div><MdNightlight /></div>
                  <div>Night Mode</div>
                  


                  <div  className="flex justify-center items-center size-7 text-sm font-semibold   text-gray-800  disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">   <input type="checkbox" onChange={handleToogle} className="toggle toggle-xs mt-1 ml-40" defaultChecked /></div>

              </div>
            </div>
          </div>
            </div>
          </div>
          <div className="navbar-center">
            <p style={{marginBottom:'0px'}} className="  text-xl lg:hidden">Telegram</p>
          </div>
          <div className="navbar-end lg:hidden">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

          </div>
        
        

          

        </div>
        <div className=''>
  
  

<div className="border-b w-full border-gray-200 dark:border-gray-700 ">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        
        <li className="me-2">
            <a href="#" className="inline-flex items-center no-underline justify-center text-lg px-8 py-4   text-white border-b-4 border-white rounded-t-md  active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
            <div className="allChats  flex flex-row gap-3 items-center">
            <img width="24" height="24" src={chat} alt="" />
            <Link to='allchats' className='text-white no-underline'>All Chats</Link>
          </div>
            </a>
        </li>
       
        
       
    </ul>
</div>


</div>
      </div>

      <div className='hidden lg:block'>
        <div className='bg-[#293a4c] py-4 flex flex-col items-center  w-36 h-[100vh] '>



          <div className="offcanvasbutton">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg   text-white   disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleOffcanvas}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" fill="white" />
                <rect y="11" width="24" height="2" rx="1" fill="white" />
                <rect y="18" width="24" height="2" rx="1" fill="white" />
              </svg>



            </button>

            <div
              className={`hs-overlay ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] ${toogle ? "bg-black text-white" : "bg-white"} border-e dark:bg-neutral-800 dark:border-neutral-700`}
              tabIndex="-1"
            >
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <div className='flex flex-col'>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-24 rounded-full">
                    <span className="text-3xl">D</span>
                  </div>
                </div>
                <div><p>Mamun</p></div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  onClick={toggleOffcanvas}
                >
                  <span className="sr-only">Close modal</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><MdGroup /></div>
                  <div>New Group</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div>
                  <FaVolumeLow />
</div>
                  <div>New Channel</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoMdContact /></div>
                  <div>Contacts</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoCallSharp /></div>
                  <div>Calls</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><FaBookmark /></div>
                  <div>Saved Messages</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center">

                  <div><IoMdSettings /></div>
                  <div>Settings</div>

              </div>
              <div className="px-4 py-2 flex gap-4 items-center justify-items-stretch ">

                  <div><MdNightlight /></div>
                  <div>Night Mode</div>
                  <div  className="flex justify-center items-center size-7 text-sm font-semibold   text-gray-800  disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"><input type="checkbox" onChange={handleToogle} className="toggle toggle-xs mt-1 ml-40" defaultChecked /></div>

              </div>
            </div>
          </div>

          <div className="allChats  flex flex-col items-center">
            <img width="24" height="24" src={chat} alt="" />
            <Link to='allchats' className='text-white no-underline'>All Chats</Link>
          </div>

          <div className="unread">

          </div>




        </div>
      </div>


    </div>
  )
}

export default Navbar