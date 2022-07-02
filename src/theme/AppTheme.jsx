import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { basicTheme } from './basicTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ basicTheme } >
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
