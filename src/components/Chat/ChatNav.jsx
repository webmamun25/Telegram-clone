import React from 'react';
import { FaSearch } from "react-icons/fa";

const ChatNav = ({ chatnav, id }) => {
  const senderdetails = chatnav?.filter(chat => chat?.sender?.id == id);
  const lastItem = senderdetails?.at(-1);
  const lastSeenDate = lastItem?.updated_at;

  // Function to format the date
  const formatLastSeenDate = (timestamp) => {
    if (!timestamp) {
      return "New User";
    }
    let date = new Date(timestamp);
    let options = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="navbar -mt-2 bg-base-100">
      <div className="flex-1 px-2">
        <div className="flex items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">{lastItem?.sender?.name}</h3>
            <p className="mt-0.5 text-gray-700">
              Last seen {lastSeenDate ? formatLastSeenDate(lastSeenDate) : "New User"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-none space-x-4 mx-4">
        <div>
          <FaSearch className='text-[#747779]' />
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#747779" d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.28 2.33.44 3.57.44.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1-8.28 0-15-6.72-15-15 0-.55.45-1 1-1H6c.55 0 1 .45 1 1 0 1.24.16 2.45.44 3.57.09.35 0 .75-.27 1.02l-2.2 2.2z" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#747779" d="M17 10.5V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2" fill="#747779" />
            <circle cx="12" cy="12" r="2" fill="#747779" />
            <circle cx="12" cy="18" r="2" fill="#747779" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
