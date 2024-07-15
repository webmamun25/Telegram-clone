import React, { useContext } from "react";

import ChatCard from "./ChatCard";
import { ToggleContext } from "../../Context/toogleContext";

const ChatComponent = ({ movieInfo }) => {
  const {toogle}=useContext(ToggleContext)
  
  return (
    <div className="wrapper">
      
     <div className="py-2 h-[100vh]" >
     <div>
     <form className="max-w-sm mx-auto hidden lg:block">
  <div >
    
    <input type="text" id="email" className={`shadow-sm ${toogle && "bg-black text-white"} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`} placeholder="search" required />
  </div>
  </form>
     </div>
        <div className="flex flex-col space-y-2 mt-2">
          {movieInfo?.map((curVal, id) => {
            return <ChatCard key={id} myData={curVal} />;
          })}
        </div>
     </div>
      </div>
    
  );
};

export default ChatComponent;