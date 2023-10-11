import { StylesBannerBemVindo } from './bannerBemVindo.styles'
import banner1 from '/LP-banner1 1.svg'

const BannerBemVindo = () => {
    return (
        <StylesBannerBemVindo className={'container'}>
            <div className={'texto'}>
                <h1 className={'titulo'}>Bem-vindo ao Finanças+</h1>
                <p className={'paragrafo1'}>
                    O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.
                </p>
                <p className={'paragrafo2'}>
                    Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.
                </p>
            </div>
            <div className={'imgem'}>
                <img src={banner1} alt='Vetor de uma mulher de sucesso em cima de uma pilha de moedas'></img>
            </div>
            <div className={'background'} />
        </StylesBannerBemVindo>
    )
}

export default BannerBemVindo