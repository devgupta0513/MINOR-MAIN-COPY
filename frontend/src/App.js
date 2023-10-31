
import { Button } from '@chakra-ui/react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage'
import {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

function App() {
  
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo)

    if(!userInfo) navigate('/')
   
  }, [navigate])
  return (
    <div className="App">
      
        <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/chat' Component={ChatPage}/>
        </Routes>
    </div>
  );
}
export default App;
