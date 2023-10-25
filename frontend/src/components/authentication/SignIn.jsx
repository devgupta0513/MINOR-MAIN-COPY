import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, Show, VStack } from '@chakra-ui/react'

const SignIn = () => {
    
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    
    const [Show, setShow] = useState(false)

        const handleCLick =()=> setShow(!Show)

       
        const submitHandler = () =>{};



    return (
        <VStack spacing="5px" color='black' >SignUp
            <FormControl id='email' isRequired >
                <FormLabel> Email </FormLabel>
                <Input
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired >
                <FormLabel> Password </FormLabel>
                <InputGroup>
                <Input
                    type={ Show ? "text" : "password"}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleCLick} >
                        {Show ? "hide" : "show"  }

                    </Button>


                </InputRightElement>
                
                </InputGroup>





            </FormControl>
            




                <Button
                colorScheme='blue'
                width="100%"
                style={{margin:15}}
                onClick={submitHandler}>
                
                Sign In

                </Button>
                <Button
                variant="solid"
                colorScheme='red'
                width="100%"
                onClick={()=>
                    {
                        setEmail("guest@example.com")
                        setPassword("12345678")
                    }}
                >
                
                Get Guest User Credentials

                </Button>



        </VStack>
    )
    }
export default SignIn