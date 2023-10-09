// import React from 'react'

import { Link, useNavigate } from "react-router-dom"
import Logo from "../../components/common/Logo/Logo"
import Button from "../../components/common/Button/Button"
import cadastro from "/cadastro.svg"
import { StylesContainer } from "./cadastro.styles"

const Cadastro = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            {/* <li><Link className={'link'} to='/dashboard'>Dashboard</Link></li> */}
            <StylesContainer className="container">
                <div className="imagem">
                    <Logo variant='Light'></Logo>
                    <img className="imagem" src={cadastro} alt='Vetor '></img>
                </div>
                <div className="formulario">
                    <form>
                        <h2>Cadastro</h2>
                        <div className="inputNome">
                            <div className="nome">
                                <label>Nome</label>
                                <input type="text" id="nome" placeholder="Maria"></input>
                            </div>
                            <div className="sobrenome">
                                <label>Sobrenome</label>
                                <input type="text" id="sobrenome" placeholder="Silva"></input>
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Email</label>
                            <input type="text" id="email" placeholder="maria.silva@email.com"></input>
                        </div>
                        <div className="inputs">
                            <label>Senha</label>
                            <input type="password" id="senha" placeholder="********"></input>
                        </div>
                        <div className="inputs">
                            <label>Confirmação de senha</label>
                            <input type="password" id="senha" placeholder="********"></input>
                        </div>
                    </form>
                    <div className="login">
                        <a>Ja tem uma conta? <Link className={'link'} to='/login'>Fazer login</Link></a>
                    </div>
                    <p>CheckBox</p>
                    <Button texto='Cadastrar' variant='primary' onClick={handleClick} />
                </div>
            </StylesContainer>
        </div>
    )
}

export default Cadastro