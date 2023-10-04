// import React from 'react'
import banner2 from '/LP-banner2 3.svg'
// import styles from '../BannerDesafioFinanceiro/BannerDesafioFinanceiro.module.css'
import { StylesBannerDesafioFinanceiro } from './bannerDesafioFinanceiro.styles'

const BannerDesafioFinanceiro = () => {
    return (
        <StylesBannerDesafioFinanceiro className={'container'}>
            <div className={'imgem'}>
                <img src={banner2} alt=''></img>
            </div>
            <div className={'texto'}>
                <h1 className={'titulo'}>O desafio Financeiro</h1>
                <p className={'paragrafo1'}>
                    Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.
                </p>
                <p className={'paragrafo2e3'}>
                    A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.
                </p>
                <p className={'paragrafo2e3'}>
                    É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.
                </p>
            </div>
        </StylesBannerDesafioFinanceiro>
    )
}

export default BannerDesafioFinanceiro