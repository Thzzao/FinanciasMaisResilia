// import React from 'react'
import PlusIcon from '/public/icon/plus-icon.jsx' //importando como um componente 
// import styles from './header.module.css'
import { StylesHeader } from './header.styles'
import Button from '../../../common/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
// import { Plus } from '@phosphor-icons/react' //importando da lib de forma desestruturada


const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/cadastro')
    }

    return (
        <StylesHeader className={'header'}>
            <h1 className={'logo'}>
                <p className={'titulo'}>Finanças</p>
                {/* <Plus color='#457b9d' weight='bold' size={35} /> */}
                <PlusIcon fill='#457B9D' width={45} />
            </h1>
            <nav>
                <ul className={'lista'}>
                    <li><Link className={'link'} to='/'>Home</Link></li>
                    <li><Link className={'link'} to=''>Quem somos</Link></li>
                    <li><Link className={'link'} to='/login'>Entrar</Link></li>
                    <li><Button texto='Criar Conta' variant='primary' onClick={handleClick} /></li>
                </ul>
            </nav>
        </StylesHeader>
    )
}

export default Header