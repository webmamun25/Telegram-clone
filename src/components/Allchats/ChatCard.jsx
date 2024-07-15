import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "../../Context/toogleContext";

const ChatCard = ({ myData }) => {
  const { creator, created_at } = myData;
  const {small,setSmall,handleSmall }=useContext(ToggleContext)
  // Format the date
  let isoDateString = created_at;
  let date = new Date(isoDateString);
  let options = {
    hour: '2-digit',
    minute: '2-digit',
  };
  let formattedDate = date.toLocaleTimeString('en-US', options);

  return (
    <div className="hover:bg-base-200 hover:rounded-full">
      {/* Link for small devices (hidden on lg screens) */}
      <Link className="no-underline lg:hidden"  to={`/alltexts/slice/${creator.id}`}>
        <div className="card-info flex space-y-3  justify-between gap-1" onClick={handleSmall}>
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
            </div>
          </div>
          <div className="text-[#949da6]">{creator.name}</div>
          <div className="text-[#949da6]">{formattedDate}</div>
        </div>
      </Link>

      {/* Link for large devices (visible on lg screens) */}
      <Link className="no-underline hidden lg:block" to={`/allchats/chats/${creator.id}`}>
        <div className="card-info flex space-y-3 justify-between gap-1">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
            </div>
          </div>
          <div className="text-[#949da6]">{creator.name}</div>
          <div className="text-[#949da6]">{formattedDate}</div>
        </div>
      </Link>
    </div>
  );
};

export default ChatCard;
