import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'

import Header from '../../components/Header'
import ContinentBanner from '../../components/ContinentDetail/ContinentBanner'
import Grid from '../../components/ContinentDetail/Grid'
import HundreadPlus from '../../components/ContinentDetail/HundreadPlus'

const Continent = () => {
    return(
        <Flex
            w="100vw"
            minH="100vh"
            direction="column"
            
        >
            <Header/>
            <ContinentBanner/>
            <Flex p="24" direction="column">
                <Flex direction="row" w="100%" align="center" mb="16">
                    <Box maxWidth="600px">
                        <Text mr="8" fontSize="24">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                    </Box>
                    <Grid/>
                </Flex>
                <HundreadPlus/>
            </Flex>
        </Flex>
    )
}

export default Continent