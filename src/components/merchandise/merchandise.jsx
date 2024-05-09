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


const theme = extendTheme({
colors: {
  brand: {
    coffee: "#603813",
    darkCoffee: "#3E2712",
    caramel: "#C17A2B",
    nudeBrown: "#A36D40",
  },
  gradients: {
    coffeeGradient: "linear(to-b, #A36D40, #603813)",
  },
},
});

const Merch = () => {
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


const totalAmount = selectedQuantity * 399; // Assuming the price is 399 per item
return (
  <ChakraProvider theme={theme}>
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" style={{
    background: "linear-gradient(to bottom, #180e04, #f2dfcc)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <ChakraCard
        maxW="800px"
        borderWidth="0px"
        borderRadius="20px"
        overflow="hidden"
        backgroundColor={"whitesmoke"}
        boxShadow="md"
      >
        <CardBody>
          <Flex>
            <Box flex="1" pr="5">
              <Image
                src="https://hourscollection.com/cdn/shop/files/Brown-Blank2_4_800x.png?v=1702845882"
                alt="Brown hoodie"
                borderRadius="lg"
                h="500px"
                maxH="400px"
                w="600px"
                maxW="300px"
              />
            </Box>
            <Box flex="4">
              <Stack spacing="5">
                <Heading size="md" color="brand.darkCoffee">
                  MotoSports Merch
                </Heading>
                <Text color="brand.darkCoffee">
                  Ready to immerse yourself in the world of vibrant
                  motorsports? Dive in, grab our mesmerizing merch, and unlock
                  your ticket to being fantastic!
                </Text>
                <Text
                  color="brand.darkCoffee"
                  fontSize="1xl"
                  fontWeight={650}
                >
                  399/-
                </Text>
                <Button
                  onClick={handleSizeClick}
                  colorScheme="brand.darkCoffee"
                  bg="brand.darkCoffee"
                  _hover={{ bg: "brand.caramel" }}
                >
                  {selectedSize ? `Size: ${selectedSize}` : "Select Size"}
                </Button>
                {showSizeOptions && (
                  <ButtonGroup spacing="1" mt="1">
                    {sizeOptions.map((size) => (
                      <Button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setShowSizeOptions(false);
                        }}
                        bg="brand.darkCoffee"
                        _hover={{ bg: "brand.caramel" }}
                      >
                        {size}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}
                <Button
                  onClick={handleQuantityClick}
                  variant="solid"
                  colorScheme="brand.darkCoffee"
                  bg="brand.darkCoffee"
                  _hover={{ bg: "brand.caramel" }}
                >
                  {selectedQuantity
                    ? `Quantity: ${selectedQuantity}`
                    : "Select Quantity"}
                </Button>
                {showQuantityOptions && (
                  <ButtonGroup spacing="1" mt="1">
                    {quantityOptions.map((quantity) => (
                      <Button
                        key={quantity}
                        onClick={() => {
                          setSelectedQuantity(quantity);
                          setShowQuantityOptions(false);
                        }}
                        bg="brand.darkCoffee"
                        _hover={{ bg: "brand.caramel" }}
                      >
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
            <Button
              variant="solid"
              colorScheme="brand.darkCoffee"
              bg="brand.darkCoffee"
              _hover={{ bg: "brand.caramel" }}
            >
              Buy now
            </Button>
            <Button
              variant="solid"
              colorScheme="brand.darkCoffee"
              bg="brand.darkCoffee"
              _hover={{ bg: "brand.caramel" }}
            >
              Total Amount : {totalAmount}/-
            </Button>
          </ButtonGroup>
        </CardFooter>
      </ChakraCard>
    </Flex>
  </ChakraProvider>
);
};

export default Merch;
