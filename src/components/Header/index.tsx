import { Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
    return(
        <Flex w="100%" p="12" h="48px" align="center" justify="center">
            <Link href="/">
                <Image src="/assets/logo.svg"/>
            </Link>
        </Flex>
    )
}

export default Header