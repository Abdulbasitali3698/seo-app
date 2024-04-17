import React from 'react'
import Header from '../components/header'
import { Box, Button, Heading, Text} from '@chakra-ui/react'
import { IoArrowForward } from 'react-icons/io5'
import { IoMdArrowBack } from 'react-icons/io'

export default function CartPractice() {
  return (
    <>
   <Header/>
   <Box bg="#00ff1c4a" height="100vh" display="flex" justifyContent="center">
    <Box bg="#0000ff30" width="60%">
        <Box bg="#ffa50057" height="15%" display="flex" justifyContent="center" alignItems="center">
            <Heading>Your Cart</Heading>
        </Box>
        <Box bg="#ff00e373" height="70%" display="flex" justifyContent="center">
            <Box bg="#00fdff94" width="70%">
                <Box bg="#f0ffff" height="25%" display="flex" alignItems="center" justifyContent="space-around">
                    <Box bg="orange">
                        <Text>Products</Text>
                    </Box>
                    <Box display="flex" flexDirection="row" bg="red" gap="60px">
                        <Text>Price</Text>
                        <Text>Quantity</Text>
                        <Text>Remove</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box bg="#ffae00c4" display="flex" flexDirection="column" gap="10px" alignItems="center">
            <Button width="70%" gap={2} borderRadius="none">CheckOut <IoArrowForward /></Button>
            <Button width="70%"gap={2} borderRadius="none"><IoMdArrowBack />Back To All Products</Button>
        </Box>
    </Box>
   </Box>
   
   </>
  )
}
