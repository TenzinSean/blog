import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Tit from '../components/tit'
import Content from "./content";
import { Flex } from "@chakra-ui/core"
import { Heading } from "@chakra-ui/core";
import { Box, Text } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import Subscribe from "./subscribe";
import Footer from "./footer";
import { SimpleGrid, Image, Badge } from "@chakra-ui/core";

const pics = [
  {
    id: 1,
    name: 'a',
    pi: "https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: 'a',
    pi: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: 'a',
    pi: "https://images.unsplash.com/photo-1559564426-013d071f49a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: 'a',
    pi: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    name: 'a',
    pi: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
]

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link 
        rel="preload"
        href="/fonts/Roboto"
        as="font"
        crossOrigin=""
        />
    </Head>
    <ThemeProvider>
    <div className="bg-image">
      <Flex justifyContent="center"
              alignItems="center">
        <Tit/>
      </Flex>
      <Nav />
     
        <div className="second-text">
            <Box maxW="32rem">
                <Heading mb={4} as="h4" size="sm" className="head-1">TenzinSean blog time</Heading>
                <Heading mb={4} as="h1" size="xl" className="head-2">WELCOME TO MYPAGE</Heading>
                <Text fontSize="lg" className="text-info">
                  Software Enginner and Passion Machine Learning Project
                </Text>
                <Button variantColor="purple" size="lg">HEAR MORE</Button>
            </Box>
          </div>
      </div>
      <Content/>
      <Subscribe/>
      <SimpleGrid columns={[2, null, 5]} spacing="10px" mt="20px">
          {pics.map((pic) => (
                              <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" key={pic.id}>
                                    <Image src={pic.pi} alt={pic.name} size="300px" />
                              </Box>
                            ))}
      </SimpleGrid>
      </ThemeProvider>
      <Footer/>
    
  <style jsx global>
   {`
      body{
        margin: 0;
      }
      .css-19ndbdu {
        display: inline-flex;
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        letter-spacing: 2px;
      }
      .item css-1mz2x6p, a{
        padding: 14px 16px;
      }
      .bg-image{
        height: 550px;
        background-image: url("https://images.unsplash.com/photo-1580654833444-91bb7cbc5ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: white;
      }
      .second-text{
        margin-top: 5%;
        display: flex;
        justify-content: center;
        text-align: center;
      }

      .head-1{
        font-family: 'Roboto';
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      .head-2{
        font-family: 'Roboto Condensed', sans-serif;
        text-transform: uppercase;
        letter-spacing: 5px;
      }

      .text-info{
        font-family: 'Roboto';
        margin-bottom: 20px;
        letter-spacing: 2px;
      }

      button{
        margin-top: 15px;
      }

      @media screen and (max-width: 40em) {
        .css-19ndbdu {
          display: none;
          padding: 0;
          margin: 0;
          font-family: 'Roboto';
          letter-spacing: 2px;
        }
        .bg-image{
          height: 400px;
          background-size: cover;
        }
      }

  `}
  </style>
  </div>
)

export default Home
