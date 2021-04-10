import { Flex ,Image, Text} from '@chakra-ui/react'

interface ListItemProps {
    name: string
    country: string
    image: string
    countryIcon: string
}

const ListItem: React.FC<ListItemProps> = ({name, country, image, countryIcon}) => {
    return(
        <Flex direction="column">
                    <Image src={image}/>
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
                                {name}
                            </Text>
                            <Text fontSize="16" color="#999">
                                {country}
                            </Text>
                        </Flex>
                        <Image src={countryIcon}/>
                    </Flex>
                </Flex>
    )
}

export default ListItem