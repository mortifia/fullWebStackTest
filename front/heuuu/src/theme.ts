import { createTheme, ThemeOptions } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const themeOptionsDark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#e07606',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#303030',
      default: '#252525',
    },
  },
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#fa9b47',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: '"Mulish", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
}

// Create a theme instance.

export const theme = createTheme(themeOptions)

export default theme
