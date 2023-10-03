// import React from 'react'
import styles from '../BannerBemVindo/BannerBemVindo.module.css'
import banner1 from '/LP-banner1 1.svg'

const BannerBemVindo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1 className={styles.titulo}>Bem-vindo ao Finanças+</h1>
                <p className={styles.paragrafo1}>
                    O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.
                </p>
                <p className={styles.paragrafo2}>
                    Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.
                </p>
            </div>
            <div className={styles.imgem}>
                <img src={banner1} alt='Vetor de uma mulher de sucesso em cima de uma pilha de moedas'></img>
            </div>
            <div className={styles.background} />
        </div>
    )
}

export default BannerBemVindo