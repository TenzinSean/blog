import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { ThemeProvider, Box, Flex, Image, Text } from "@chakra-ui/core";
import Error from '../pages/_error';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/core";
import { CloseButton } from "@chakra-ui/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // 👈
import { Icon } from "@chakra-ui/core";
import { MdSettings } from "react-icons/md"
import {  GoThreeBars } from "react-icons/go";



function Nav({ statusCode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const handlePlacementChange = event => setPlacement(event.target.value);
  const btnRef = React.useRef();
  const firstField = React.useRef();


  if (statusCode === 404) {
        return <Error statusCode={statusCode}/>
      } 

  return (
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
            <div className="burgerMenu" onClick={onOpen}>
              <div></div>
              <div></div>
              <div></div>
             {/* <GoThreeBars size="32px" onClick={onOpen}/> */}
             </div>
            <Drawer placement={placement} 
                    onClose={onClose} 
                    isOpen={isOpen}
                    className="drawer"
            >
              <DrawerOverlay />
              <DrawerContent>
              <DrawerCloseButton size="md" className="close-button"/>
                <DrawerHeader borderBottomWidth="1px" color="white">Basic Drawer</DrawerHeader>
                <DrawerBody>
                  <List spacing={3} styleType="disc">
                      <ListItem className="item">
                          <Link color="teal" href="/">
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
                </DrawerBody>
              </DrawerContent>
            </Drawer>
      <style jsx global>{`

      .burgerMenu {
        position: absolute;
        left: 20px;
        top: 20px;
      }

      .burgerMenu > div {
        width: 35px;
        height: 4px;
        background-color: white;
        margin: 6px 0;
      }
      .css-1vo6j75 {
          background-color: black !important;
          font-color: white;
          font-family: 'Roboto';
        }

        .close-button{
          border: none;
        }
        
         a{
          text-decoration: none;
          display: inline-flex;
          color: white;
        }
        .item{
          list-style-type:none;
          overflow: hidden;
        }
        a:hover{
          color: #6B46C1;
          transition: color 500ms ease-in-out;
        }
        .css-1vo6j75{
          background-color: #333;
        }
        @media screen and (max-width: 40em) {
          button {
            display: none;
          }
        }
      `}</style>
      </Flex>
      </ThemeProvider>
  );
}

export default Nav
