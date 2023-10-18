// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import { temaGlobal } from './styles/theme'
import LandingPage from './pages/LandingPage/LandingPage'
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Transacoes from './pages/Transacoes/Transacoes'

const Rotas = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={temaGlobal}>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/transacoes/:tipo' element={<Transacoes />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default Rotas

//Criar o arquivo e o componente rotas
//importar o BR -  Pai da aplicação
//importa Routes -  define o que é dinamico e o que é estatico
//Criar as paginas que serão utilizadas
//Importar o Route -  define o path(caminho) de cada pagina
//Importar Themeprovider, tema, e o globalStyle
//Importar o componente rotas na raiz do projeto, main.jsx  