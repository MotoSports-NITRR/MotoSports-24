import { Box, Button, ButtonGroup, CardBody, CardFooter, Card as ChakraCard, ChakraProvider, Divider, extendTheme, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RazorpayButton from './razorPay/paymentButton';
import './merchandise.css'
import ebajaMerch from '../assets/images/ebajaMerch.png'

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


    const totalAmount = selectedQuantity * 799;

    return (
        <div className="relative" style={{ background: "#fffbf5" }} >
            <ChakraProvider theme={theme}>
                <Flex justifyContent="center" alignItems="center" className="" style={{ display: "flex" }}>
                    <ChakraCard className="" borderWidth="0px" overflow="hidden" backgroundColor={"#fffbf5"} color="gradients.coffeeGradient" boxShadow="md" minHeight="85vh">
                        <CardBody className="chakraCardBody" minHeight="85vh">
                            <Flex minHeight="85vh" className="justify-center align-middle">
                                <Box flex="1" pr="5" className="flex flex-col merchBoxImg justify-center">
                                    <Image src={ebajaMerch} h="460px" maxH="700px" w="425px" maxW="500px" className="merchImg" />
                                </Box>

                                <Box flex="1" className="merchOptions">
                                    <Stack spacing="5">
                                        <Heading size="md" color="brand.darkCoffee" className=""><span className="font-albulaHeavy text-3xl">MotoSports Merch</span></Heading>
                                        <Heading color="brand.caramel"><span className="font-albulaHeavy text-5xl">Discover the Passion </span></Heading>

                                        <Text color="brand.darkCoffee" className="font-albula mt-2">
                                            Ready to immerse yourself in the world of vibrant
                                            motorsports? Dive in, grab our mesmerizing merch, and unlock
                                            your ticket to being fantastic!
                                        </Text>

                                        <Text color="brand.darkCoffee" fontSize="1xl" fontWeight={650}><span className="font-albulaMedium"><span className="font-inter font-black">Price:-</span> 799/-</span></Text>
                                        {showSizeOptions && (
                                            <ButtonGroup spacing="1" mt="1">
                                                {sizeOptions.map((size) => (
                                                    <Button key={size} onClick={() => { setSelectedSize(size); setShowSizeOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }}>
                                                        {size}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        )}

                                        <Button onClick={handleQuantityClick} className="max-w-80" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                            {selectedQuantity
                                                ? `Quantity: ${selectedQuantity}`
                                                : `Select: ${Quantity}`
                                                    ? `Quantity: ${selectedQuantity}`
                                                    : `Select: ${Quantity}`
                                            }
                                        </Button>

                                        {showQuantityOptions && (
                                            <ButtonGroup spacing="3" mt="3">
                                                {quantityOptions.map((quantity) => (
                                                    <Button key={quantity} onClick={() => { setSelectedQuantity(quantity); setShowQuantityOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }}>
                                                        {quantity}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        )}

                                        <ButtonGroup spacing="2">
                                            <Button className="px-16 preorderBtn" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" fontFamily="albula">
                                                Order Amount - {totalAmount}/-
                                            </Button>
                                        </ButtonGroup>
                                        <RazorpayButton />
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
