
import {
  createBrowserRouter,

} from "react-router-dom";

import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Allchats from "../components/Allchats/Allchats";
import Chat from "../components/Chat/Chat";
import Chatslayout from "../layouts/Chatslayout";
import Slider from "../components/Chat/Slider";
import SmallLayout from "../layouts/SmallLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/allchats',
      element:<Allchats></Allchats>,
      children:[
        {
          path: "chats/:id",
          element: <Chatslayout></Chatslayout>,
          
          children:[{
              index:true,
              element:<Chat></Chat>
          },
          
        
        ]
        },
        
      ]
    },
    
      {
        path:'/alltexts/slice/:id',
        element:<SmallLayout></SmallLayout>
      }
  
   
  
  ]
  },
  
]);


export default router