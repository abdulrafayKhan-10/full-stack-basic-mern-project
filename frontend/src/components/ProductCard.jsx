import { EditIcon, DeleteIcon} from '@chakra-ui/icons'
import { Box, Image, Text, Heading, HStack, IconButton, useColorModeValue, Modal, ModalOverlay,     ModalContent, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, VStack, Input, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { useToast } from '@chakra-ui/react'

function ProductCard({product}) {
  const textColor = useColorModeValue("gray.600", "gray.200")
  const bg = useColorModeValue("white", "gray.800")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [UpdatedProducts, setUpdatedProducts] = useState(product); 
  const {deleteProduct, updateProduct} = useProductStore();
  const toast = useToast();

  const handleDeleteProduct = async(pid) => {
    const {success, message} = await deleteProduct(pid)
    if(!success){
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,	
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleUpdateProduct = async(pid, UpdatedProducts) => {
    const {success, message} = await updateProduct(pid,UpdatedProducts)
    if(!success){
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,	
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Success',
        description: "Product updated successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
    onClose();
  }

  return (
    <Box
    shadow="lg"
    rounded="lg"
    bg={bg}
    overflow="hidden"
    transition="all 0.3s ease"
    _hover = {{transform: "translateY(-5px)", shadow: "xl"}}
    >
       <Image src={product.image} alt={product.name} h={250} w="full" ObjectFit="cover" />

       <Box p={4}>
         <Heading as="h3" size="md" mb={2}>{product.name}</Heading>

         <Text mb={4}  color={textColor} fontWeight="medium">${product.price}</Text>

         <HStack>
            <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
            <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
         </HStack>
       </Box>

       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack spacing={4}>
        <Input 
        placeholder='Product Name' 
        name='name'
        size='lg' 
        value={UpdatedProducts.name}
        onChange={(e) => setUpdatedProducts({...UpdatedProducts, name: e.target.value})}
        /> 
        <Input 
        placeholder='Product Price' 
        name='price'
        size='lg' 
        value={UpdatedProducts.price}
        onChange={(e) => setUpdatedProducts({...UpdatedProducts, price: e.target.value})}
        /> 
        <Input 
        placeholder='Product Image' 
        name='image'
        size='lg' 
        value={UpdatedProducts.image}
        onChange={(e) => setUpdatedProducts({...UpdatedProducts, image: e.target.value})}
        /> 
        
      </VStack>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={() => {handleUpdateProduct(UpdatedProducts._id, UpdatedProducts)}} mr={3}>
              Update
            </Button>
            <Button variant='ghost' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  )
}
export default ProductCard
