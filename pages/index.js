import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Tit from '../components/tit'
import { Flex } from "@chakra-ui/core"

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-image">
      <Flex justifyContent="center"
              alignItems="center">
        <Tit/>
      </Flex>
      <Nav />
      </div>
    Home
    <style jsx>{`
      .bg-image{
        height: 450%;
        background-image: url("https://images.unsplash.com/photo-1580654833444-91bb7cbc5ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: white;
      }
  `}</style>
  <style jsx global>
   {`
      body{
        margin: 0;
      }
  `}
  </style>
  </div>
)

export default Home
