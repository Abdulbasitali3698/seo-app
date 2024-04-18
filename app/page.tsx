"use client"
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, Heading, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import Header from "./components/header";
import { useContext, useEffect, useState } from "react";
import {  } from "./context";

export default function Home() {
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch("/products.json");
        if(!response.ok){
          throw new Error('Failed to Fetch Product');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error in fetching products", error);
      }
    };
    fetchData();
  },[]);
  
  return (
    <Box>
      <Header/>
      <Box  height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box  height="100vh" width="80%">
          <Box  textAlign="center" height="15vh" display="flex" justifyContent="center" flexDirection="column">
            <Heading>Get Your Desire Product</Heading>
            <Text>Quality in a service or product is not what you put into it.</Text>
          </Box>
          <Box height="85%" >
            <Box paddingTop="50px" display="flex" gap={5} justifyContent="center" flexWrap="wrap"> 
            {products.map(product => (
                <Card key={product.id} maxW='sm' width="30%">
                  <CardBody>
                    <Image
                      src={product.image}
                      alt={product.name}
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{product.name}</Heading>
                      <Text>{product.description}</Text>
                      <Flex justifyContent="space-between">
                        <Text color='blue.600' fontSize='2xl'>
                          {product.price}
                        </Text>
                        <Link href="/cart">
                        <Button variant='ghost' colorScheme='blue' onClick={() => addToCart(product)} >
                          Add to cart
                        </Button>
                        </Link>    
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            {/* <Card maxW='sm' width="30%">
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
              </Card> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
function useCart(): { addToCart: any; } {
  throw new Error("Function not implemented.");
}

