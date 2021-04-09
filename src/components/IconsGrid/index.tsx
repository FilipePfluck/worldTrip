import { SimpleGrid, Box, Image, Text, Flex } from '@chakra-ui/react'

const IconsGrid = () => {
    return(
        <SimpleGrid 
            minChildWidth="80px"
            pb="12"
        >   
            <Flex direction="column" align="center">
                <Image src="/assets/cocktail 1.svg"/>
                <Text mt="4" fontWeight="semibold">vida noturna</Text>
            </Flex>
            
            <Flex direction="column" align="center">
                <Image src="/assets/surf 1.svg"/>
                <Text mt="4" fontWeight="semibold">praia</Text>
            </Flex>

            <Flex direction="column" align="center">
                <Image src="/assets/building 1.svg"/>
                <Text mt="4" fontWeight="semibold">moderno</Text>
            </Flex>

            <Flex direction="column" align="center">
                <Image src="/assets/museum 1.svg"/>
                <Text mt="4" fontWeight="semibold">clássico</Text>
            </Flex>

            <Flex direction="column" align="center">
                <Image src="/assets/earth 1.svg"/>
                <Text mt="4" fontWeight="semibold">e mais...</Text>
            </Flex>
        </SimpleGrid>

    )
}

export default IconsGrid