import { Flex, Heading } from "@chakra-ui/layout"

const ContinentBanner = () => {
    return(
        <Flex
            h="560px"
            w="100%"
            p="24"
            bgImage="url(/assets/details/Europa.png)"
            bgSize="120%"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Heading mt="auto">Europa</Heading>
        </Flex>
    )
}

export default ContinentBanner