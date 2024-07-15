import React, { useEffect, useRef, useState } from 'react';
import './chat.css';

const ChatBody = ({ chatbody, id }) => {
  const [popupDate, setPopupDate] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatbody]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString([], { month: 'long', day: 'numeric' });
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const chatElement = children[i];
        const rect = chatElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          const date = formatDate(chatbody[i]?.created_at);
          if (date !== popupDate) {
            setPopupDate(date);
          }
          break;
        }
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [popupDate, chatbody]);

  const senderdetails = chatbody?.filter(chat => chat?.sender?.id == id);


  return (
    <div className="chat-body">
      {popupDate && <div className="date-popup">{popupDate}</div>}
      <div ref={containerRef} className="chat-container">
        {senderdetails?.map((chat, i) => (
          <div key={i} className="chat-element">
            <div className="chat chat-start">
              <div className="chat-bubble">
                {chat?.message}
              </div>
              <div className="chat-footer text-white opacity-50">
                Delivered on {formatDate(chat?.created_at)} at {formatTime(chat?.created_at)}
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">You underestimate my power!</div>
              <div className="chat-footer text-white opacity-50">
                Seen at 12:46
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
