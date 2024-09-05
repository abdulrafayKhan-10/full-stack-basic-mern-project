import { Container, Flex, useColorModeValue, HStack, Text, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon} from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={'1140px'} px={4} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row"
        }}
        >

       

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
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
        <Text>

        </Text>
        </HStack>
        </Flex>
    </Container>
)

}

export default Navbar
