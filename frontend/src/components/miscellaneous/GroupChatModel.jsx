import React from 'react'

const GroupChatModel = ({children}) => {
  return (
    <div> </div>
  )
}

export default GroupChatModel














// import React, { Children } from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure,
// } from '@chakra-ui/react'
// const GroupChatModel = ({Children}) => {













//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//         <>
//             <span onClick={onOpen}>{Children}</span>

//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Modal Title</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>

//                     </ModalBody>

//                     <ModalFooter>
//                         <Button colorScheme='blue' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                         <Button variant='ghost'>Secondary Action</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

// export default GroupChatModel