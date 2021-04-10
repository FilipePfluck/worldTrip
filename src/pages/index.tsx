import { Flex, Divider, Heading } from '@chakra-ui/react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import IconsGrid from '../components/IconsGrid'
import Swiper from '../components/Swiper'

export default function Home() {
  return (
    <Flex
      maxW="100vw"
      minH="100vh"
      direction="column"
    >
      <Header/>
      <Banner/>

      <Flex
        direction="column"
        w="100%"
        p={["8","24"]}
      >
        <IconsGrid/>
        <Divider w="100px" alignSelf="center" mb={["4","12"]}/>
        
        <Heading fontWeight="medium" mx="auto" mb="4px">Vamos nessa?</Heading>
        <Heading fontWeight="medium" mx="auto">Então escolha seu continente</Heading>

        <Swiper/>
      </Flex>
    </Flex>
  )
}
