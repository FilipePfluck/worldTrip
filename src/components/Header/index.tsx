import { Image, Flex } from '@chakra-ui/react'

const Header = () => {
    return(
        <Flex w="100%" p="12" h="48px" align="center" justify="center">
            <Image src="/assets/logo.svg"/>
        </Flex>
    )
}

export default Header