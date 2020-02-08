import React from 'react'
import Link from 'next/link'
import { Heading } from "@chakra-ui/core";
import { ThemeProvider, Box, Flex, Image, Text } from "@chakra-ui/core";

const Tit = () => (
    <ThemeProvider>
        <Flex 
            justifyContent="center"
            alignItems="center"
        >
            <Heading as="h2" size="xl">TenzinSean</Heading>
        </Flex>
    </ThemeProvider>
);

export default Tit;
