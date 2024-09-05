import { Center, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
function Navbar() {
  return (
    <Container maxW={'1140px'} px={4} bg={useColorModeValue('white', 'gray.800')}>
        <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
            xxl: "row",
        }}
        >

        </Flex>

        <Text
        fontSize={{base: "22", sm: "28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip={"text"}
        >
            <Link to="/"> Product Store 🛒</Link>
        </Text>
        <HStack spacing={2}	alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
            <PlusSquareIcon fontSize={20}/>
            </Button>
            </Link>
        <Text>

        </Text>
        </HStack>

    </Container>
)

}

export default Navbar
