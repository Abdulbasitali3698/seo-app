import { Box, Heading, Text } from '@chakra-ui/react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata ={
    title:{
        absolute:"About Us",
    },
    description:"Learn more About Page",
    keywords:"about us, company, team",
    
}


export default function About() {
  return (
    <Box>
        <Heading>About page</Heading>
        <Image src="/logo.png" alt="image" width={100} height={100}></Image>
    </Box>  
  )
}
