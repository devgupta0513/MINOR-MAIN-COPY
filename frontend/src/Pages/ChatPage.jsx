
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/miscellaneous/MyChats';
import ChatBox from '../components/miscellaneous/ChatBox';

import { useState } from "react";
import { ChatState } from "../components/context/ChatProvider";
import { Box } from '@chakra-ui/react';

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display ="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;




















// import { useContext, createContext } from 'react';
// import { Box } from '@chakra-ui/react';
// import SideDrawer from '../components/miscellaneous/SideDrawer';
// import MyChats from '../components/miscellaneous/MyChats';
// import ChatBox from '../components/miscellaneous/ChatBox';

// // Create and export the context
// export const ChatContext = createContext();

// const ChatPage = () => {
//   // Mock ChatState for example purposes
//   var n=JSON.parse(localStorage.getItem("userInfo"));
//   const ChatState = {
//     user: {
//       name: n.name,
//       email:n.email,
//       pic:n.pic
//       // other user propert
//     },
//     // other context values
//   };

//   return (
//     <Box w="100%">
//       <ChatContext.Provider value={ChatState}>
//         <Box>
//           {ChatState.user && <SideDrawer user={ChatState.user} />}
//         </Box>
//         <Box display="flex" justifyContent="space-between" h="91.5vh" p="10px">
//           {ChatState.user && <MyChats />}
//           {ChatState.user && <ChatBox />}
//         </Box>
//       </ChatContext.Provider>
//     </Box>
//   );
// };

// export default ChatPage;
