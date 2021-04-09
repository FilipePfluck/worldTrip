import { Flex, Text } from '@chakra-ui/react'

interface GridItemProps {
    number: number,
    text: string
}

const GridItem: React.FC<GridItemProps> = ({number, text}) => {
    return(
        <Flex direction="column" align="center">
            <Text fontSize="48" fontWeight="semibold" color="#FFBA08">
                {number}
            </Text>
            <Text fontSize="24" fontWeight="semibold" color="#57686B">
                {text}
            </Text>
        </Flex>
    )
}

export default GridItem