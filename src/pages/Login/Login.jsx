// import React from 'react'

import { Link, useNavigate } from "react-router-dom"
import Logo from "../../components/common/Logo/Logo"
import Button from "../../components/common/Button/Button"
import login1 from "/login 1.svg"
import { StylesBody } from "./login.styles"

const Login = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <StylesBody className="body">
            {/* <Link className={'link'} to='/dashboard'>Dashboard</Link> */}
            <div className="container">
                <form className="formulario">
                    <Logo variant='Default' />
                    <label>Nome de usuário</label>
                    <input type="text" id="email" placeholder="email@email.com"></input>
                    <label>Senha</label>
                    <input type="password" id="senha" placeholder="*********"></input>
                    <a>Ainda não tem conta?<Link className={'link'} to='/cadastro'>Cadastre-se</Link></a>
                    <Button texto='Entrar' variant='primary' onClick={handleClick} />
                </form>
                <div className="imagem">
                    <img src={login1} alt='Vetor de um homem concluíndo tarefas com um celular atrás'></img>
                </div>
            </div>
        </StylesBody>
    )
}

export default Login
