import { Box, Heading } from '@chakra-ui/react'
import Head from 'next/head';
import React from 'react'

export default function Data() {
  return (
    <Box>
        <Head>
            <title>Data Page</title>
            <meta name="description" content="this is data page" />
            <meta name="keywords" content="data, data page, uploading" />
        </Head>
        <Heading>Data page</Heading>
    </Box>
  )
}
