import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.50',
                fontFamily: 'poppins'
            }
        }
    }
})