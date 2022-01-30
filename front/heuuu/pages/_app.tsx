// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// //import { ThemeProvider } from 'next-themes'

// import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }

// export default MyApp

import '../styles/globals.css'
import '@fontsource/mulish'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider as userThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
