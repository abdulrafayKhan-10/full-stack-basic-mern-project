import { Container, VStack, Text, SimpleGrid, Box, textDecoration } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product.js';
function Home() {
  const {fetchProducts, products} = useProductStore();

useEffect(() => {fetchProducts()}, [fetchProducts]);
console.log("Prducts", products);

  return (
    <Container maxW={'container.xl'} py={12}>
        <VStack spacing={8}>
        <Text
        fontSize={{base: "22", sm: "28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip={"text"}
        >
        Current Products 🛒
        </Text>
        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.600"}>
          No Products Found {" "}	
          <Link to={"/create"}>
            <Text as={"span"} color={"blue.400"} _hover={{textDecoration: "underline"}}>Create a Product</Text>
          </Link>
        </Text>

        <SimpleGrid 
        columns={{
          base: 1,
          md: 2,
          lg: 3 
        }} 
        spacing={10}
        w={"full"}
        > 

{products.map((product) => (
  <ProductCard 
    key={product._id} 
    product={product}
  />
))}

</SimpleGrid>

        </VStack>
    </Container>
  )
}

export default Home
