import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styles'

import 'swiper/swiper.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gravity Agency</title>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap"
        />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
