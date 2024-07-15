import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import ChatComponent from './ChatComponent';
import { ToggleContext } from '../../Context/toogleContext';

const Allchats = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const {toogle}=useContext(ToggleContext)
  const getCardData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://devapi.beyondchats.com/api/get_all_chats?_limit=20&page=${page}`
    );
    const data = await res.json();
    const mydata = data.data.data;
    setCard((prev) => [...prev, ...mydata]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = () => {
    const container = document.getElementById('scroll-container');
    console.log( container.scrollTop)
    if (
      window.innerHeight + container.scrollTop  >=
      container.scrollHeight 
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    container.addEventListener('scroll', handleInfiniteScroll);
    return () => container.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  return (
    <div className="lg:w-96 h-screen w-full ">
      <div
        id="scroll-container"
        style={{ overflowY: 'scroll', height: '100%',overflowX:"scroll" }}
        className={`${toogle ? "container bg-black text-white":"container "}`}
      >
        <ChatComponent movieInfo={card} />
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Allchats;
