import React from 'react'
import ReactDOM from 'react-dom/client'
// import LandingPage from './pages/LandingPage/LandingPage'
// import { GlobalStyle } from './styles/GlobalStyle'
// import { ThemeProvider } from 'styled-components'
// import { temaGlobal } from './styles/theme'
import Rotas from './Rotas'
// import TransacoesProvider from './core/contexto/useTransacoes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <TransacoesProvider> */}
        <Rotas />
        {/* </TransacoesProvider> */}
    </React.StrictMode>,
)
