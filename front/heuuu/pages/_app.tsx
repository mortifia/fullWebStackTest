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
import { ThemeProvider } from '@mui/material/styles'
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  useMediaQuery,
} from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { themeOptions } from '../src/theme'
import { ThemeProvider as userThemeProvider } from 'next-themes'

export const ThemeModeContext = React.createContext({
  toggleMode: () => {},
})
export const useThemeMode = () => {
  React.useContext(ThemeModeContext)
}

function MyApp({ Component, pageProps }: AppProps) {
  //-----test-----
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  ) //future interaction avec la variable
  const Mode = React.useMemo(
    () => ({
      toggleMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )
  const theme = React.useMemo(() => {
    const tmp = themeOptions
    themeOptions.palette!.mode = mode
    return createTheme(tmp)
  }, [mode])
  //-----ebd test-----
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeModeContext.Provider value={Mode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  )
}

export default MyApp
