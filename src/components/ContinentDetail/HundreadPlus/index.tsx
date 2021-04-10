import { Heading, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'

import ListItem from './listItem'

interface CityProps {
    id: number,
    name: string,
    country: string,
    image: string,
    countryIcon: string
}

interface HundreadPlusProps {
    citys: CityProps[]
}

const HundreadPlus: React.FC<HundreadPlusProps> = ({citys}) => {
    return(
        <Flex direction="column">
            <Heading mb="8">Cidades +100</Heading>
            
            <SimpleGrid 
                flex="1" 
                spacing="32px" 
                minChildWidth="240px" 
            >
                {citys.map(city => (
                    <ListItem 
                        key={city.id}
                        name={city.name} 
                        country={city.country} 
                        image={city.image}
                        countryIcon={city.countryIcon}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default HundreadPlus