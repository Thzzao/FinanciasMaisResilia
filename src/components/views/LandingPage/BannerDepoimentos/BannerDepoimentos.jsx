import { StyleContainer } from "./BannerDepoimentos.styles";
import banner3 from "/lp-banner3 1.svg";

const BannerDepoimentos = () => {
    return (
        <StyleContainer>
            <div className="content">
                <picture>
                    <img src={banner3} alt="" />
                </picture>
                <div>
                    <section className="textos">
                        <h2>Transformações Financeiras Reais</h2>
                        <p>
                            Descubra como nossos usuários alcançaram suas metas, controlaram
                            suas finanças e conquistaram sonhos que pareciam distantes.
                        </p>
                    </section>
                    {/* FINALIZAR */}
                    <div>CARDDDDD</div>
                </div>
            </div>
        </StyleContainer>
    )
}

export default BannerDepoimentos;