// import React from 'react'
import banner2 from '/LP-banner2 3.svg'
import styles from '../BannerDesafioFinanceiro/BannerDesafioFinanceiro.module.css'

const BannerDesafioFinanceiro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgem}>
                <img src={banner2} alt=''></img>
            </div>
            <div className={styles.texto}>
                <h1 className={styles.titulo}>O desafio Financeiro</h1>
                <p className={styles.paragrafo1}>
                    Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.
                </p>
                <p className={styles.paragrafo2e3}>
                    A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.
                </p>
                <p className={styles.paragrafo2e3}>
                    É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.
                </p>
            </div>
        </div>
    )
}

export default BannerDesafioFinanceiro