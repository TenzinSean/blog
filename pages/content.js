import React from 'react'
import { SimpleGrid } from "@chakra-ui/core";
import { Box, Text } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Image, Badge } from "@chakra-ui/core";

const content = () => {
    const gallery = [
        {
            id: 1,
            name: "Page1",
            project: "One",
            img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: 2,
            name: "Page2",
            project: "Two",
            img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
        },
        {
            id: 3,
            name: "Page3",
            project: "Three",
            img: "https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 4,
            name: "Page4",
            project: "Four",
            img: "https://images.unsplash.com/photo-1570215171655-49dc3fa810b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 5,
            name: "Page5",
            project: "Five",
            img: "https://images.unsplash.com/photo-1532522750741-628fde798c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 6,
            name: "Page6",
            project: "Six",
            img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
        },
        {
            id: 7,
            name: "Page7",
            project: "Seven",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 8,
            name: "Page8",
            project: "Eight",
            img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80"
        },
        {
            id: 9,
            name: "Page9",
            project: "Nine",
            img: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
    ]
    return(
        <div className="container">
            <Flex justifyContent="center"
              alignItems="center">
                  <h1>My latest works</h1>
            </Flex>
            <div className="inner-content">
                <ThemeProvider>
                <SimpleGrid columns={3} spacingX="40px" spacingY="20px" >
                         {gallery.map((gall) => (
                           <Box mt={{ base: 4, md: 0 }} maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" key={gall.id}>
                                <Image src={gall.img} alt={gall.name} size="350px" />
                                <Box p="6">
                                    <Box d="flex" alignItems="baseline">
                                        <Badge rounded="full" px="2" variantColor="purple">
                                            {gall.project}
                                        </Badge>
                                        <Box
                                            color="gray.500"
                                            fontWeight="semibold"
                                            letterSpacing="wide"
                                            fontSize="xs"
                                            textTransform="uppercase"
                                            ml="2"
                                        >
                                            {gall.name} 
                                        </Box>
                                    </Box>
                               </Box> 
                           </Box>
                        
                        ))}
                </SimpleGrid>
                </ThemeProvider>
            </div>
        <style jsx> {`
             @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');
            h1{
                margin-top: 50px;
                font-family: 'Roboto Condensed', sans-serif;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
            .container{
                margin-right: auto;
                margin-left: auto;
                max-width: 960px;
                padding-right: 10px;
                padding-left: 10px;
            }
            .inner-content{
                margin-top: 40px;
            }

            .img {
                width: 150px;
            }

            @media screen and (max-width: 40em) {
              
            }
            
        `}</style>
        </div>
    )
};

export default content;