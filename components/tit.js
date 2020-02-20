import React from 'react'
import Link from 'next/link'
import { Heading } from "@chakra-ui/core";
import { ThemeProvider, Box, Flex, Image, Text } from "@chakra-ui/core";

const Tit = () => (
    <ThemeProvider>
        <Flex 
            justifyContent="center"
            alignItems="center"
            className="title-one"
        >
            <Heading as="h2" size="xl">TenzinSean</Heading>
        </Flex>

        <style jsx global>{`
            @media screen and (max-width: 40em) {
                .css-p5x3r9 {
                    margin-top: 80% !important;
                    letter-spacing: 12px;
                }
                .css-p5x3r9:hover {
                    color: red;
                    transition: color 500ms ease-in-out;
                    cursor: pointer;
                }
            }
        `}</style>
    </ThemeProvider>
);

export default Tit;
