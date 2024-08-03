import { Box, Button, ButtonGroup, CardBody, CardFooter, Card as ChakraCard, ChakraProvider, Divider, extendTheme, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RazorpayButton from './razorPay/paymentButton';
import './merchandise.css'

const theme = extendTheme({
    colors: {
        brand: {
            coffee: "#603813",
            darkCoffee: "#3E2712",
            caramel: "#C17A2B",
            nudeBrown: "#A36D40",
        },
        gradients: {
            coffeeGradient: "linear(to-br, #A36D40, #603813)",
        },
    },
});


const Merchandise = () => {
    return (
        <div className="relative flex justify-center items-center bg-modestBrown" >
            <div className="w-85vw">
                <ChakraProvider theme={theme}>
                    <Flex justifyContent="center" alignItems="center" className="" style={{ display: "flex", }}>
                        <ChakraCard className="" borderWidth="0px" overflow="hidden" backgroundColor={"#fffbf5"} color="gradients.coffeeGradient" boxShadow="md" height="80vh">
                            <CardBody className="chakraCardBody" height="80vh">
                                <Flex height="80vh">
                                    <Box flex="1" pr="5" className="flex flex-col merchBoxImg">
                                        <Image src="https://hourscollection.com/cdn/shop/files/Brown-Blank2_4_800x.png?v=1702845882" alt="Brown hoodie" h="500px" maxH="700px" w="400px" maxW="500px" className="merchImg"/>
                                    </Box>

                                    <Box flex="1" className="merchOptions">
                                        <Stack spacing="5">
                                            <Heading size="md" color="brand.darkCoffee" className=""><span className="font-albulaHeavy text-3xl">MotoSports Merch</span></Heading>
                                            <Heading color="brand.caramel"><span className="font-albulaHeavy text-5xl">Discover the Passion </span></Heading>

                                            <Text color="brand.darkCoffee" className="font-albula mt-2">
                                            Are you ready to fully immerse yourself in the thrilling and colorful world of vibrant motorsports? Dive in headfirst and explore the high-octane excitement that awaits you. Grab our mesmerizing merchandise, designed to capture the essence of speed and style, and unlock your ticket to an exhilarating experience. Feel the rush of the racetrack and the roar of the engines as you join a community of passionate fans.
                                            </Text>

                                            <Text color="brand.darkCoffee" fontSize="1xl" fontWeight={650}><span className="font-albulaMedium">399/- Per</span></Text>
                                            <RazorpayButton />
                                        </Stack>
                                    </Box>
                                </Flex>
                            </CardBody>
                        </ChakraCard>
                    </Flex>
                </ChakraProvider>
            </div>
        </div>
    );
};


export default Merchandise;
