import { Flex ,Image, Text} from '@chakra-ui/react'

const ListItem = () => {
    return(
        <Flex direction="column">
                    <Image src="/assets/details/hundreadPlus/londres.png"/>
                    <Flex 
                        align="center" 
                        justify="space-between" 
                        p="4"
                        borderColor="#FFBA08"
                        borderWidth={1}
                        borderTop={0}
                        borderRadius="0 0 8px 8px"
                    >
                        <Flex direction="column">
                            <Text fontSize="20" fontWeight="semibold" color="#57686B">
                                Londres
                            </Text>
                            <Text fontSize="16" color="#999">
                                Reino Unido
                            </Text>
                        </Flex>
                        <Image src="/assets/details/hundreadPlus/icons/reinoUnido.png"/>
                    </Flex>
                </Flex>
    )
}

export default ListItem