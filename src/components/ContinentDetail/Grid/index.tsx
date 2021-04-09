import { SimpleGrid } from '@chakra-ui/react'

import GridItem from './GridItem'

const Grid = () => {
    return (
        <SimpleGrid
            flex="1" 
            spacing="8px" 
            minChildWidth="40px" 
        >
            <GridItem number={50} text="países"/>
            <GridItem number={60} text="línguas"/>
            <GridItem number={27} text="cidades +100"/>
        </SimpleGrid>
    )
}

export default Grid