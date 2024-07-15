import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat/Chat'
import { Outlet, useLoaderData, useParams } from 'react-router-dom'

const Chatslayout = () => {
  const [chat,setChat]=useState({})
  
 const {id}=useParams()

 useEffect(()=>{
  setTimeout(()=>{
    fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`)
  .then(res=>res.json())
  .then(data=>setChat(data))
  },300)
 },[])

  return (
    <div className='lg:w-full  lg:h-[100vh]'>
        <Chat chat={chat} id={id}></Chat>
    </div>
  )
}

export default Chatslayout