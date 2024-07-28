import {
    Box,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    Card as ChakraCard,
    ChakraProvider,
    Divider,
    extendTheme,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";

import React, { useState } from "react";
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


    const totalAmount = selectedQuantity * 399;

    return (
        <div className="relative" >
            <ChakraProvider theme={theme}>
                <Flex justifyContent="center" className="" style={{
                    // background: "linear-gradient(#fff1de,1%, #fce6c7, #2f1000ff)",
                    display: "flex",
                    // maxHeight: "1000px"
                    // flexDirection: "column",
                    // alignItems: "center",
                }}>

                    <ChakraCard className="" borderWidth="0px" overflow="hidden" backgroundColor={"#fffbf5"} color="gradients.coffeeGradient" boxShadow="md">
                        <CardBody className="chakraCardBody">
                            <Flex>
                                <Box flex="1" pr="5" className="flex flex-col merchBoxImg">
                                    {/* <Heading size="md" color="brand.darkCoffee" className=" text-center pb-5"><span className="font-albulaHeavy text-3xl">MotoSports Merch</span></Heading> */}
                                    <Image src="https://hourscollection.com/cdn/shop/files/Brown-Blank2_4_800x.png?v=1702845882" alt="Brown hoodie" h="500px" maxH="700px" w="400px" maxW="500px" className="merchImg" />
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

                                        <Text color="brand.darkCoffee" fontSize="1xl" fontWeight={650}><span className="font-albulaMedium">399/- Per</span></Text>

                                        <Button onClick={handleSizeClick} className="max-w-80" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                            {selectedSize ? `Size: ${selectedSize}` : "Select Size"}
                                        </Button>

                                        {showSizeOptions && (
                                            <ButtonGroup spacing="1" mt="1">
                                                {sizeOptions.map((size) => (
                                                    <Button key={size} onClick={() => { setSelectedSize(size); setShowSizeOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} >
                                                        {size}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        )}

                                        <Button onClick={handleQuantityClick} className="max-w-80" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                            {selectedQuantity
                                                ? `Quantity: ${selectedQuantity}`
                                                : "Select Quantity"}
                                        </Button>

                                        {showQuantityOptions && (
                                            <ButtonGroup spacing="1" mt="1">
                                                {quantityOptions.map((quantity) => (
                                                    <Button key={quantity} onClick={() => { setSelectedQuantity(quantity); setShowQuantityOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }}>
                                                        {quantity}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        )}

                                    </Stack>
                                </Box>
                            </Flex>
                        </CardBody>

                        <Divider />

                        <CardFooter justifyContent="center">
                            <ButtonGroup spacing="2">

                                <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OPNF3Dif5T9gKq" async> </script>
                                    <Button type="submit" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                        Buy now
                                    </Button>
                                </form>
                                <Button className="px-16 preorderBtn" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" fontFamily="albula">
                                    Preorder - {totalAmount}/-
                                </Button>
                            </ButtonGroup>
                        </CardFooter>

                    </ChakraCard>
                </Flex>
            </ChakraProvider>
        </div>
    );
};

export default Merchandise;