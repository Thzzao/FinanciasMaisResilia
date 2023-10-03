// import React from 'react'
import PlusIcon from '../../../public/icon/plus-icon' //tentar importar de forma destruturada 
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <p className={styles.titulo}>Finanças</p>
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