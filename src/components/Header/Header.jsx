// import React from 'react'
import PlusIcon from '/public/icon/plus-icon.jsx' //importando como um componente 
// import styles from './header.module.css'
import { StylesHeader } from './header.styles'
// import { Plus } from '@phosphor-icons/react' //importando da lib de forma desestruturada


const Header = () => {
    return (
        <StylesHeader className={'header'}>
            <h1 className={'logo'}>
                <p className={'titulo'}>Finanças</p>
                {/* <Plus color='#457b9d' weight='bold' size={35} /> */}
                <PlusIcon fill='#457B9D' width={45} />
            </h1>
            <nav>
                <ul className={'lista'}>
                    <li><a className={'link'} href=''>Home</a></li>
                    <li><a className={'link'} href=''>Quem somos</a></li>
                    <li><a className={'link'} href=''>Entrar</a></li>
                    <li><button>Criar Conta</button></li>
                </ul>
            </nav>
        </StylesHeader>
    )
}

export default Header