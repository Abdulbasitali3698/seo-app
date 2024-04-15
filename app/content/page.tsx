import { Box, Heading } from '@chakra-ui/react'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'


export const metadata: Metadata ={
    title:{
        absolute:"Content Page",
    },
    description:"Learn more Content Page",
    keywords:"content, resources, articles"
}

export default function Content() {
  return (
    <Box>
        <Heading>Content Page</Heading>
        <Image src="/logo.png" alt="image" width={100} height={100}></Image>
    </Box> 
  )
}
