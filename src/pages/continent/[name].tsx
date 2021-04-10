import { GetStaticProps, GetStaticPaths } from 'next'

import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'

import Header from '../../components/Header'
import ContinentBanner from '../../components/ContinentDetail/ContinentBanner'
import Grid from '../../components/ContinentDetail/Grid'
import HundreadPlus from '../../components/ContinentDetail/HundreadPlus'
import api from '../../services/api'

interface HundreadPlusProps {
    id: number,
    name: string,
    country: string,
    image: string,
    countryIcon: string
}

interface ContinentProps {
    data: {
        id: string,
        title: string,
        description: string
        countries: number,
        languages: number,
        hundreadPlus: HundreadPlusProps[]
    }
}

const Continent: React.FC<ContinentProps> = ({data}) => {
    return(
        <Flex
            maxW="100vw"
            minH="100vh"
            direction="column"
            
        >
            <Header/>
            <ContinentBanner name={data.title}/>
            <Flex p={["8","24"]} direction="column">
                <Flex direction={["column","row"]} w="100%" align="center" mb="16">
                    <Box maxWidth="560px">
                        <Text mr={["0","8"]} mb={["4", "0"]} fontSize={["16","24"]}>
                            {data.description}
                        </Text>
                    </Box>
                    <Grid 
                        countries={data.countries} 
                        languages={data.languages} 
                        hundreadPlus={data.hundreadPlus.length}
                    />
                </Flex>
                <HundreadPlus citys={data.hundreadPlus}/>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    return{
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async({params}) => {
    const { name } = params

    const {data} = await api.get(`/continents/${name}`)

    console.log(data)

    return{
        props: {
            data
        }
    }
}

export default Continent