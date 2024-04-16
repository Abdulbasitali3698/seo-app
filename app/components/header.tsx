import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Header() {
  return (
    <Box bg="blue" height="10vh" color="white" >
      <Flex alignItems="center" justifyContent="space-between" padding="0px 25px">
        <Heading>Header</Heading>
        <IconButton
            icon={<FaCartArrowDown />}
            aria-label="Shopping Cart"
            variant="ghost"
          />
      </Flex>  
    </Box>
  )
}
