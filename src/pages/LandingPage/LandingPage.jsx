// import React from 'react'
import styles from './LandingPage.module.css'
import Header from '../../components/Header/Header'
import BannerDesafioFinanceiro from '../../components/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Button from '../../components/common/Button/Button'
import BannerBemVindo from '../../components/BannerBemVIndo/BannerBemVindo'
import Logo from '../../components/common/Logo/Logo'



const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Button />
            <BannerBemVindo />
            <BannerDesafioFinanceiro />
            <Logo variant='secundary' />
        </div>
    )
}

export default LandingPage