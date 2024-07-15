import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Shared/Navbar';
import Chatslayout from './Chatslayout';
import SmallLayout from './SmallLayout';
import { ToggleContext } from '../Context/toogleContext';

const MainLayout = () => {
  const {small}=useContext(ToggleContext)
  console.log(small)
  return (
    <div>
      {/* Flex layout for lg screens and hidden for sm screens */}
      <div className='flex flex-row hidden lg:flex '>
        <Navbar />
        <Outlet />
        <Chatslayout />
       

      </div>
      {/* <Chatslayout /> */}
      {/* Flex column layout for sm screens and hidden for lg screens */}
      <div className='flex flex-col lg:hidden'>
        <Navbar />
        <Outlet />
      
        
     
      </div>
    </div>
  );
};

export default MainLayout;