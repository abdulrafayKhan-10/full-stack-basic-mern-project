import {React, useState} from 'react'
import { Container, Heading, VStack, Input, Button, Box, useColorModeValue, useToast, Toast } from '@chakra-ui/react'
import { useProductStore } from '../store/product.js';


function CreatePage() {
  const [newProduct, setNewProduct] = useState(
    {
      name: "",
      price: "",
      image: ""
    });

    const {createProduct} = useProductStore();
    const toast = useToast()
    const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    console.log(`Success: ${success}, Message: ${message}`)
    if(!success){
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      })
    }
    setNewProduct({
      name: "",
      price: "",
      image: ""
    })
    }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} color={"grey.500"} mb={8} mt={20}>
        Create New Product
      </Heading>

      <Box w={"full"} bg={useColorModeValue("white", "gray.800")} rounded={"lg"} boxShadow={"2xl"} p={8}>
      <VStack spacing={4}>
        <Input 
        placeholder='Product Name' 
        name='name'
        size='lg' 
        value={newProduct.name}
        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        /> 
        <Input 
        placeholder='Product Price' 
        name='price'
        size='lg' 
        value={newProduct.price}
        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        /> 
        <Input 
        placeholder='Product Image' 
        name='image'
        size='lg' 
        value={newProduct.image}
        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
        /> 
        
      <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
        Add Product
      </Button>
      </VStack>
      </Box>


      </VStack> 
    </Container>
  )
}

export default CreatePage
