// import React from 'react'
import styles from './LandingPage.module.css'
import Header from '../../components/Header/Header'
import BannerDesafioFinanceiro from '../../components/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Button from '../../components/Button/Button'
import BannerBemVindo from '../../components/BannerBemVIndo/BannerBemVindo'



const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Button />
            <BannerBemVindo />
            <BannerDesafioFinanceiro />
        </div>
    )
}

export default LandingPage