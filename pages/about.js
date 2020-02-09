import React from 'react'
import Nav from '../components/nav'
import Tit from '../components/tit';
import { Flex } from "@chakra-ui/core"
import { Box, Text } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import Footer from "./footer";


const about = () => (
    <div>
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
      </ThemeProvider>
      About
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
  `}
  </style>
    </div>
);


export default about;