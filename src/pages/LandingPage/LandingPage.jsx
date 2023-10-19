import styles from '../LandingPage/landingPage.module.css'
import Header from '../../components/views/LandingPage/Header/Header'
import BannerBemVindo from '../../components/views/LandingPage/BannerBemVindo/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/views/LandingPage/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Footer from '../../components/views/LandingPage/Footer/Footer'
import { getCategorias } from '../../service/api'
import BannerComeceAgora from '../../components/views/LandingPage/BannerComeceAgora/BannerComeceAgora'
import BannerDepoimentos from '../../components/views/LandingPage/BannerDepoimentos/BannerDepoimentos'

const LandingPage = () => {
    getCategorias('/categorias')
    return (
        <div className={styles.container}>
            <Header />
            <BannerBemVindo />
            <BannerDesafioFinanceiro />
            <BannerComeceAgora />
            <BannerDepoimentos />
            {/* Terminar o BannerDepoimentos */}
            {/* Fazer o BannerVantangens*/}
            <Footer />
        </div>
    )
}

export default LandingPage