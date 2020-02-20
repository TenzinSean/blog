import react from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { Box, Text, Icon, Stack } from "@chakra-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/core";


const footer = () => {
    return (
        <div id="bg-color2">
            <ThemeProvider>
                <div className="second-text">
                    <Box maxW="32rem" mt="5px">
                        <h1>Tenzin Sean CHABDELTSANG</h1>
                        <Stack isInline className="footer-menu">
                            <Breadcrumb separator="" pl={6}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.facebook.com/tenzin.sean1"><FaFacebook size="40px" color="white"/></BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.instagram.com/tenzin_sean/"><FaInstagram size="40px" color="white"/></BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.linkedin.com/in/tenzin-sean-chabdeltsang-b60ab2114/"><FaLinkedin size="40px" color="white"/></BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/contact"><AiFillWechat size="40px" color="white"/></BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.youtube.com/channel/UCGCBuxmNHL-irXh5oML9flQ?view_as=subscriber"><FaYoutube size="40px" color="white"/></BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Stack>
                    </Box>
                </div>
            </ThemeProvider>
            <style jsx> {`
                #bg-color2 {
                    margin-top: -20px;
                    height: 200px;
                    background-color: #343437
                }
                h1{
                    margin-top: 20px;
                    color: #fff;
                    letter-spacing: 2px;
                    font-family: 'Roboto';
                    text-transform: uppercase;
                }

                .footer-menu{
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}

export default footer;