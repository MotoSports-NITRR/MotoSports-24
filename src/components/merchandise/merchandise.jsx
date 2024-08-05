import { Box, Button, CardBody, Card as ChakraCard, ChakraProvider, Flex, Heading, IconButton, Image, Stack, Text, extendTheme } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import RazorpayButton from './razorPay/paymentButton';
import './merchandise.css';
import ebajaMerch from '../assets/images/ebajaMerch.png';

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
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [showSizeOptions, setShowSizeOptions] = useState(false);
    const [showQuantityOptions, setShowQuantityOptions] = useState(false);
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
    const quantityOptions = [...Array(6).keys()].map((i) => i + 1);

    const handleSizeClick = () => {
        setShowSizeOptions(!showSizeOptions);
        setShowQuantityOptions(false);
    };

    const handleQuantityClick = () => {
        setShowQuantityOptions(!showQuantityOptions);
        setShowSizeOptions(false);
    };

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    const totalAmount = selectedQuantity * 799;

    return (
        <div className="relative" style={{ background: "#fffbf5" }}>
            <ChakraProvider theme={theme}>
                <Flex justifyContent="center" alignItems="center" style={{ display: "flex" }}>
                    <ChakraCard borderWidth="0px" overflow="hidden" backgroundColor={"#fffbf5"} color="gradients.coffeeGradient" boxShadow="md" minHeight="85vh">
                        <CardBody minHeight="85vh">
                            <Flex minHeight="85vh" justifyContent="center" alignItems="center">
                                <Box flex="1" pr="5" className="flex flex-col merchBoxImg justify-center">
                                    <Image src={ebajaMerch} h="460px" maxH="700px" w="425px" maxW="500px" className="merchImg" />
                                </Box>

                                <Box flex="1" className="merchOptions">
                                    <Stack spacing="5">
                                        <Heading size="md" color="brand.darkCoffee"><span className="font-albulaHeavy text-3xl">MotoSports Merch</span></Heading>
                                        <Heading color="brand.caramel"><span className="font-albulaHeavy text-5xl">Discover the Passion</span></Heading>

                                        <Text color="brand.darkCoffee" className="font-albula mt-2">
                                            Ready to immerse yourself in the world of vibrant motorsports? Dive in, grab our mesmerizing merch, and unlock your ticket to being fantastic!
                                        </Text>
                                        
                                        
                                        <Flex alignItems="center" mt={0}>
                                            <IconButton
                                                icon={<MinusIcon />}
                                                onClick={handleDecreaseQuantity}
                                                size="sm"
                                                aria-label="Decrease quantity"
                                            />
                                            <Text mx="4" fontSize="2xl">{selectedQuantity}</Text>
                                            <IconButton
                                                icon={<AddIcon />}
                                                onClick={handleIncreaseQuantity}
                                                size="sm"
                                                aria-label="Increase quantity"
                                            />
                                        </Flex>

                                        <div className="flex justify-start w-[450px]">
                                            <Text color="brand.darkCoffee" fontSize="1xl" fontWeight={650} mt={2}>
                                                <span className="font-albulaMedium mr-8">
                                                    <span className="font-albula font-black">Total Amount :  </span> 
                                                    {totalAmount}/-
                                                </span>
                                            </Text>

                                            <RazorpayButton />
                                        </div>

                                    </Stack>
                                </Box>
                            </Flex>
                        </CardBody>
                    </ChakraCard>
                </Flex>
            </ChakraProvider>
        </div>
    );
};

export default Merchandise;
