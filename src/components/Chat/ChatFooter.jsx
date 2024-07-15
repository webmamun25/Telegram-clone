import React, { useContext } from 'react';
import { BsEmojiFrown } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { ToggleContext } from '../../Context/toogleContext';

const ChatFooter = () => {
  const { small } = useContext(ToggleContext);

  return (
    <div className={`${small ? 'fixed bottom-0 w-full' : 'fixed bottom-0 lg:w-[73%] w-full'} bg-base-100`}>
      <div className="navbar bg-base-100 lg:px-4 px-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a className="btn btn-ghost text-xl">
              <img className='lg:w-10 lg:h-10 w-8 h-8' src="https://img.icons8.com/?size=100&id=CYKLk4DosdHW&format=png&color=000000" alt="Logo" />
            </a>
            <input type="text" placeholder="Type here" className="input input-ghost lg:w-[600px] w-[300px] border-none ml-2" />
          </div>
          <div className="flex items-center gap-2">
            <BsEmojiFrown className='text-2xl text-[#747779]' />
            <MdKeyboardVoice className='text-2xl me-3 text-[#747779]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
