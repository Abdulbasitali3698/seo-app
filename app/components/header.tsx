import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Header() {
  return (
    <Box height="100px" display="grid" border="1px" borderColor="#8080805e">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding="0px 150px">
          <Heading>Header</Heading>
          <IconButton
          icon={<FaCartArrowDown />}
          aria-label='Shopping Cart'
          bg="none"
          />
        </Box>
    </Box>
  )
}
