// import React from 'react'
import PlusIcon from '/public/icon/plus-icon.jsx' //importando como um componente 
import styles from './header.module.css'
// import { Plus } from '@phosphor-icons/react' //importando da lib de forma desestruturada

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <p className={styles.titulo}>Finanças</p>
                {/* <Plus color='#457b9d' weight='bold' size={35} /> */}
                <PlusIcon fill='#457B9D' width={45} />
            </h1>
            <nav>
                <ul className={styles.lista}>
                    <li><a className={styles.link} href=''>Home</a></li>
                    <li><a className={styles.link} href=''>Quem somos</a></li>
                    <li><a className={styles.link} href=''>Entrar</a></li>
                    <li><button>Criar Conta</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header