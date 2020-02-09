import react from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { Box, Text, Icon, Stack } from "@chakra-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const footer = () => {
    return (
        <div id="bg-color2">
            <ThemeProvider>
                <div className="second-text">
                    <Box maxW="32rem" mt="5px">
                        <h1>Tenzin Sean CHABDELTSANG</h1>
                        <Stack isInline>
                
                        </Stack>
                    </Box>
                </div>
            </ThemeProvider>
            <style jsx> {`
                #bg-color2 {
                    margin-top: -20px;
                    height: 150px;
                    background-color: #343437
                }
                h1{
                    margin-top: 20px;
                    color: #fff;
                    letter-spacing: 2px;
                    font-family: 'Roboto';
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    );
}

export default footer;