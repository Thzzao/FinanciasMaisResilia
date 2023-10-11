// import React from 'react'
import styles from '../LandingPage/landingPage.module.css'
import Header from '../../components/views/LandingPage/Header/Header'
import BannerDesafioFinanceiro from '../../components/views/LandingPage/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import BannerBemVindo from '../../components/views/LandingPage/BannerBemVindo/BannerBemVindo'
import Footer from '../../components/views/LandingPage/Footer/Footer'
// import Logo from '../../components/common/Logo/Logo'



const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <BannerBemVindo />
            <BannerDesafioFinanceiro />
            <Footer />
        </div>
    )
}

export default LandingPage