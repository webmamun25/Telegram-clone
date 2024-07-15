// Create a new context file (e.g., ToggleContext.js)
import React, { createContext, useState, useContext } from 'react';

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [toogle, setToogle] = useState(false);
  const [small,setSmall]=useState(false)
  const handleToogle = () => {
    setToogle(!toogle);
  };

  const handleSmall=()=>{
    setSmall(!small)
  }
console.log("small",small)

  return (
    <ToggleContext.Provider value={{ toogle, setToogle, handleToogle ,small,setSmall,handleSmall }}>
      {children}
    </ToggleContext.Provider>
  );
};


export default ToggleProvider

