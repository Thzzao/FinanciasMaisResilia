/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { StylesLayout } from './Layout.styles'
import Logo from '../../common/Logo/Logo'
import { useContext } from 'react'
// import { TransacoesContext } from '../../../core/contexto/useTransacoes'

const Layout = ({ children }) => {

    // const { nome } = useContext(TransacoesContext)

    return (
        <StylesLayout>
            <aside className='barra-lateral'>
                <Logo />
                <ul>
                    <li><Link to='/dashboard'>Dasboard</Link></li>
                    <li><Link to='/transacoes/entradas'>Entradas</Link></li>
                    <li><Link to='/transacoes/saidas'>Saídas</Link></li>
                </ul>
            </aside>
            <div>
                <header className='header-layout'>
                    {/* <p>Olá, {nome}</p> */}
                    <p>Olá, Admin</p>
                    <Link>Sair</Link>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </StylesLayout>
    )
}

export default Layout