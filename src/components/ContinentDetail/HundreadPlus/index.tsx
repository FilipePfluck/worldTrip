import { Heading, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'

import ListItem from './listItem'

const HundreadPlus = () => {
    return(
        <Flex direction="column">
            <Heading mb="8">Cidades +100</Heading>
            
            <SimpleGrid 
                flex="1" 
                spacing="32px" 
                minChildWidth="240px" 
            >
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </SimpleGrid>
        </Flex>
    )
}

export default HundreadPlus