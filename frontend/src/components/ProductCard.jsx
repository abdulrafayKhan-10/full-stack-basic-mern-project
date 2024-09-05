import { EditIcon, DeleteIcon, HStack, IconButton, Image, Text, Heading, Box } from '@chakra-ui/icons'
import React from 'react'

function ProductCard({product}) {
  return (
    <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s ease"
    _hover = {{transform: "translateY(-5px)", shadow: "xl"}}
    >
       <Image src={product.image} alt={product.name} h={48} w="full" ObjectFit="cover" />

       <Box p={4}>
         <Heading as="h3" size="md" mb={2}>{product.name}</Heading>

         <Text mb={4}  color="gray.600" fontWeight="medium">${product.price}</Text>

         <HStack>
            <IconButton icon={<EditIcon />} colorScheme="blue" />
            <IconButton icon={<DeleteIcon />} colorScheme="red" />
         </HStack>
       </Box>
    </Box>
  )
}

export default ProductCard
