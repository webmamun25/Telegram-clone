import React, { useContext } from 'react'
import ChatNav from './ChatNav'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import { ToggleContext } from '../../Context/toogleContext'

const Chat = ({chat,id}) => {

  const {toogle}=useContext(ToggleContext)
  return (
    <div className={`${toogle?"bg-black text-white":' banner'}`}>
      <ChatNav chatnav={chat?.data} id={id}></ChatNav>
      <ChatBody chatbody={chat?.data} id={id}></ChatBody>
      <ChatFooter></ChatFooter>

    </div>
  )
}

export default Chat