import { Flex, Heading } from "@chakra-ui/layout"

interface ContinentBannerProps {
    name: string
    image?: string
}

const ContinentBanner: React.FC<ContinentBannerProps> = ({name}) => {
    return(
        <Flex
            h={["200px","560px"]}
            w="100%"
            p="24"
            bgImage="url(/assets/details/Europa.png)"
            bgSize="120%"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Heading mt="auto">{name}</Heading>
        </Flex>
    )
}

export default ContinentBanner