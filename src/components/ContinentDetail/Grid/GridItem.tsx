import { Flex, Text, Tooltip } from '@chakra-ui/react'

import { FiInfo } from 'react-icons/fi'

interface GridItemProps {
    number: number,
    text: string,
    tooltipText?:string
}

const GridItem: React.FC<GridItemProps> = ({number, text, tooltipText}) => {
    return(
        <Flex direction="column" align="center">
            <Text fontSize={["32","48"]} fontWeight="semibold" color="#FFBA08">
                {number}
            </Text>
            <Text as="span" fontSize={["20","24"]} fontWeight="semibold" color="#57686B">
                <Flex align="center">
                    {text} 
                    {tooltipText && (
                        <Tooltip label={tooltipText} aria-label={tooltipText}>
                            <span style={{marginLeft: 4}}>
                                <FiInfo/>
                            </span>
                        </Tooltip>
                    )}
                </Flex>
            </Text>
        </Flex>
    )
}

export default GridItem