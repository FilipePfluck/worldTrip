import { Flex } from '@chakra-ui/react'

interface SwiperSlideContent { 
    background: string
}

const SwiperSlideContent: React.FC<SwiperSlideContent> = ({children, background}) => {
    return(
        <Flex 
            h="400"
            bgImage={background}
            bgSize="120%"
            bgPosition="center"
            bgRepeat="no-repeat"
            align="center"
            justify="center"
            direction="column"
        >
            {children}
        </Flex>
    )
}

export default SwiperSlideContent