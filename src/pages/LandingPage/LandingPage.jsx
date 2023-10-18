import styles from '../LandingPage/landingPage.module.css'
import Header from '../../components/views/LandingPage/Header/Header'
import BannerBemVindo from '../../components/views/LandingPage/BannerBemVindo/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/views/LandingPage/BannerDesafioFinanceiro/BannerDesafioFinanceiro'
import Footer from '../../components/views/LandingPage/Footer/Footer'
import { getCategorias } from '../../service/api'

const LandingPage = () => {
    getCategorias('/categorias')
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