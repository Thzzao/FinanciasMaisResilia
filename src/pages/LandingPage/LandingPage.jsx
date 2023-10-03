// import React from 'react'
import '../../styles/globalStyle.module.css'
import styles from './LandingPage.module.css'
import Header from '../../components/Header/Header'
import BannerBemVindo from '../../components/BannerBemVIndo/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/BannerDesafioFinanceiro/BannerDesafioFinanceiro'

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <BannerBemVindo />
            <BannerDesafioFinanceiro />
        </div>
    )
}

export default LandingPage