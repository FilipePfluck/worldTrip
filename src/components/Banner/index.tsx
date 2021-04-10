import { Box, Heading, Text, Image, Flex, useBreakpointValue } from '@chakra-ui/react'

const Banner = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex 
            w="100%" 
            p={["4", "8", "16"]} 
            px={["6", "12", "24"]}
            bgImage="url(/assets/Banner.png)"
            bgSize="120%"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            justify="space-between"
        >   
            <Box>
                <Heading 
                    fontFamily="poppins" 
                    fontWeight="medium" 
                    maxW={["100%","480px"]} 
                    lineHeight="56px"
                    fontSize={["16px", "24px", "40px"]}
                >
                    5 Continentes, {isWideVersion && <br/>} infinitas possibilidades 
                </Heading>

                <Text 
                    mt={["4px", "12px", "24px"]} 
                    color="gray.300" 
                    fontSize={["14px", "20px", "20px"]}
                    maxW={["100%", "600px"]}
                >
                    Chegou na hora de tirar do papel a viagem com que você sempre sonhou
                </Text>
            </Box>
            {isWideVersion && (<Image 
                height="200px" 
                src="/assets/Airplane.png"
            />)}
        </Flex>

    )
}

export default Banner