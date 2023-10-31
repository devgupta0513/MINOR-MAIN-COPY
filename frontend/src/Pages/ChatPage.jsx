import { useContext, createContext } from 'react';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/miscellaneous/MyChats';
import ChatBox from '../components/miscellaneous/ChatBox';

// Create and export the context
export const ChatContext = createContext();

const ChatPage = () => {
  // Mock ChatState for example purposes
  const ChatState = {
    user: {
      name: 'John Doe',
      // other user properties
    },
    // other context values
  };

  return (
    <Box w="100%">
      <ChatContext.Provider value={ChatState}>
        <Box>
          {ChatState.user && <SideDrawer user={ChatState.user} />}
        </Box>
        <Box display="flex" justifyContent="space-between" h="91.5vh" p="10px">
          {ChatState.user && <MyChats />}
          {ChatState.user && <ChatBox />}
        </Box>
      </ChatContext.Provider>
    </Box>
  );
};

export default ChatPage;
