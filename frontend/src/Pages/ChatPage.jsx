
import { useContext } from 'react';
import { createContext} from "react";
import {Box} from '@chakra-ui/react'

 import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/miscellaneous/MyChats';
import ChatBox from '../components/miscellaneous/ChatBox';
 const ChatContext = createContext() 


 const ChatPage = () => {
  
  

 
  const ChatState =  useContext(ChatContext)
    
  const {user}= ChatState ||{}

  return (<Box 
    w="100%"
  >
      <ChatContext.Provider>
    <Box  >
      {    <SideDrawer />}
    
    </Box>
    <Box display="flex" justifyContent="space-between" h="91.5vh" p="10px" >
      {  <MyChats/>}
      {   <ChatBox/>}
    </Box>
     </ChatContext.Provider>
    </Box>
  )
}

export default ChatPage;