import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'

const Banner = () => {
    return(
        <Flex 
            w="100%" 
            p="16" 
            px="24"
            bgImage="url(/assets/Banner.png)"
            bgSize="120%"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            justify="space-between"
        >   
            <Box>
                <Heading fontFamily="poppins" fontWeight="medium" maxW="500px" lineHeight="56px">
                    5 Continentes, 
                </Heading>
                <Heading fontFamily="poppins" fontWeight="medium" maxW="500px">
                    infinitas possibilidades 
                </Heading>
                <Text mt="24px" color="gray.300" >
                    Chegou na hora de tirar do papel a viagem com que você sempre sonhou
                </Text>
            </Box>
            <Image 
                height="200px" 
                src="/assets/Airplane.png"

            />
        </Flex>

    )
}

export default Banner