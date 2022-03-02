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
import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ContextScrollY = createContext(0) // shared scrollY position

function MyApp({ Component, pageProps }: AppProps) {
  const [scrollY, setScrollY] = useState(0) // shared scrollY position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) //shared scrollY position
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ContextScrollY.Provider value={scrollY}>
        <Component {...pageProps} />
      </ContextScrollY.Provider>
    </>
  )
}

export default MyApp
