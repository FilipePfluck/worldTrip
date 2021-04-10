import Link from 'next/link'

import { Flex } from '@chakra-ui/react'

interface SwiperSlideContent { 
    background: string,
    continent: string
}

const SwiperSlideContent: React.FC<SwiperSlideContent> = ({children, background, continent}) => {
    return(
        <Link href={`/continent/${continent}`}>
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
        </Link>
    )
}

export default SwiperSlideContent