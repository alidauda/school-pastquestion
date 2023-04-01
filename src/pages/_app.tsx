import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@fontsource/montserrat/400.css';
import '@fontsource/noto-sans/700.css';

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
