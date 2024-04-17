import React from 'react'
import Header from '../components/header'
import { Box, Button, Divider, Heading, Text} from '@chakra-ui/react'
import { IoArrowForward } from 'react-icons/io5'
import { IoMdArrowBack } from 'react-icons/io'

export default function Cart() {
  return (
   <>
   <Header/>
   <Box  height="100vh" display="flex" justifyContent="center">
    <Box  width="60%">
        <Box height="15%" display="flex" justifyContent="center" alignItems="center">
            <Heading>Your Cart</Heading>
        </Box>
        <Box  height="70%" display="flex" justifyContent="center">
            <Box  width="70%">
                <Box  height="25%" display="flex" alignItems="center" justifyContent="space-around">
                    <Box>
                        <Text>Products</Text>
                    </Box>
                    <Box display="flex" flexDirection="row"  gap="60px">
                        <Text>Price</Text>
                        <Text>Quantity</Text>
                        <Text>Remove</Text>
                    </Box>
                </Box>
                <Divider/>
            </Box>
        </Box>
        <Box  display="flex" flexDirection="column" gap="10px" alignItems="center">
            <Button width="70%" gap={2} borderRadius="none">CheckOut <IoArrowForward /></Button>
            <Button width="70%"gap={2} borderRadius="none"><IoMdArrowBack />Back To All Products</Button>
        </Box>
    </Box>
   </Box>
   </>
  )
}
