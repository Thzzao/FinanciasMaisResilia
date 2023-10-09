// import React from 'react'

import { Link } from "react-router-dom"

const Cadastro = () => {
    return (
        <div>Cadastro
            <li><Link className={'link'} to='/login'>Login</Link></li>
            <li><Link className={'link'} to='/dashboard'>Dashboard</Link></li>
        </div>
    )
}

export default Cadastro

// ESTRUTURA HTML