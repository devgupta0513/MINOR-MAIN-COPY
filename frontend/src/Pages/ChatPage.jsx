import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { effect } from '@chakra-ui/react';
const ChatPage = () => {
          
  const [chats, setChats] = useState([])
    useEffect(() => {
      
    
      return () => {
        FetchChats()
      }
    }, [ ])
    
    const FetchChats = async()=>
    {
            const {data} = await axios.get('/api/chat');
            setChats(data);
            
    }
    useEffect(()=>{
    
        return()=>{ 
            FetchChats();
        }
    },[])
  return ( 
    <div>{chats.map((chat)=>(
      <div key={chat._id}>{chat.chatName}</div>
      
    ))}</div>
  )
}
export default ChatPage  