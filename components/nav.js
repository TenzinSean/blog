import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { ThemeProvider, Box, Flex, Image, Text } from "@chakra-ui/core";

const Nav = () => (
  <ThemeProvider>
    <Flex 
      justifyContent="center"
      alignItems="center"
      >
        <Box>
          <List spacing={3}>
            <ListItem className="item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItem>
              <ListItem className="item">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </ListItem>
              <ListItem className="item">
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </ListItem>
              <ListItem className="item">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
            </ListItem>
          </List>
          </Box>
    <style jsx>{`
       a{
        text-decoration: none;
        display: inline-block;
        color: white;
      }
      .item{
        list-style-type:none;
        display: inline-block;
        overflow: hidden;
      }
      a:hover{
        color: red;
        transition: color 500ms ease-in-out;
      }

    `}</style>
    </Flex>
    </ThemeProvider>
)

export default Nav
