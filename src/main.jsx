import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { temaGlobal } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={temaGlobal}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
