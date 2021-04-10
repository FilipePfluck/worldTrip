import { SimpleGrid } from '@chakra-ui/react'

import GridItem from './GridItem'

interface GridProps {
    countries: number,
    languages: number,
    hundreadPlus: number
}

const Grid: React.FC<GridProps> = ({countries, languages, hundreadPlus}) => {
    return (
        <SimpleGrid
            flex="1" 
            spacing={["12px","8px"]} 
            minChildWidth="40px" 
            width="100%"
        >
            <GridItem number={countries} text="países"/>
            <GridItem number={languages} text="línguas"/>
            <GridItem number={hundreadPlus} text="cidades +100" tooltipText="Cidades +100 são as que estão entre as 100 mais visitadas do mundo"/>
        </SimpleGrid>
    )
}

export default Grid