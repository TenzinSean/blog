import React from 'react'
import { Flex } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Input } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import { Box, Text } from "@chakra-ui/core";

const subscribe = () => {
    return (
        <div className="bg-color">
            <ThemeProvider>
                <div className="second-text">
                    <Box maxW="32rem">
                        <h1>Follow our subscribe</h1>
                        <h3>Update our profile and send us</h3>
                        <Input placeholder="Enter your email" mb="6"/>
                        <Button variantColor="purple" size="lg">HEAR MORE</Button>
                    </Box>
            </div>
            </ThemeProvider>
            <style jsx> {`
                .bg-color {
                    height: 350px;
                    background-color: #343437
                }
                h1{
                    color: white;
                    letter-spacing: 4px;
                    margin-top: 50px;
                    margin-bottom: 30px;
                    font-family: 'Roboto';
                }
                h3{
                    margin-bottom: 40px;
                    color: white;
                    letter-spacing: 4px;
                    font-family: 'Roboto';
                    text-align:center;
                }
                .css-1bqs6u7 {
                    margin-bottom: 40px;
                }
               
            `}</style>
        </div>
        
    );
}

export default subscribe;