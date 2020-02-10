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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // 👈

function Nav({ statusCode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const handlePlacementChange = event => setPlacement(event.target.value);

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
            <Button onClick={onOpen} className="drawer-items" >
              <FontAwesomeIcon icon="user" />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} class="drawer">
              <DrawerOverlay />
              <DrawerContent>
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


// function getInitialProps({ query, res }) {
// 	const { id } = query;
// 	const user = users.find((u) => u.id == id);
// 	if (!user) {
// 		res.statusCode = 404;
// 	}
// 	return {
// 		user: user || {},
// 		statusCode: user ? 200 : 404,
// 	};
// }

// Nav.getInitialProps = getInitialProps;


export default Nav
