import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, Heading, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Data() {
  return (
    <Box bg="#ff00001f" height="100vh">
      <Box bg="#0000ff24" height="100px" display="grid">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding="0px 150px">
          <Heading>Header</Heading>
          <Link href='/cart'>
            <IconButton
            icon={<FaCartArrowDown />}
            aria-label='Shopping Cart'
            bg="none"
            />
          </Link>
        </Box>
      </Box>
      <Box bg="pink" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box bg="#ff00001c" height="100vh" width="80%">
          <Box bg="#78ff0057" textColor="green" textAlign="center" height="15vh" display="flex" justifyContent="center" flexDirection="column">
            <Heading>Get Your Desire Product</Heading>
            <Text>Quality in a service or product is not what you put into it.</Text>
          </Box>
          <Box height="85%" bg="#00fff03d">
            <Box paddingTop="50px" display="flex" gap={5} justifyContent="center" flexWrap="wrap"> 
              <Card maxW='sm' width="30%">
                <CardBody>
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Flex justifyContent="space-between">
                      <Text color='blue.600' fontSize='2xl'>
                        $450
                      </Text>
                      <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                      </Button>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>    
)}
