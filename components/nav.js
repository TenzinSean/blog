import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { ThemeProvider, Box, Flex, Image, Text } from "@chakra-ui/core";
import Error from '../pages/_error';


function Nav({ statusCode }) {
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
      <style jsx>{`
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
