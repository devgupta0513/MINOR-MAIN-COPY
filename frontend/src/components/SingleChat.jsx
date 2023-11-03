
import React from 'react'
import { ChatState } from './context/ChatProvider';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, setSelectedChat, user, notification, setNotification } =
        ChatState();

    return (<>
        {selectedChat ? (
            <></>
        ) : (
            <Box>
<Text>
    
</Text>
            </Box>
        )}



    </>)
}

export default SingleChat



