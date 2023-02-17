import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const theme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    }
};


export default extendTheme(theme);