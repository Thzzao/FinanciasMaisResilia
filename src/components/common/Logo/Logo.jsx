// import React from 'react'
import { StylesLogo, LightLogo } from './logo.styles'

const Logo = ({ variant }) => {
    return (
        <>
            {variant == 'primary' && <StylesLogo />}
            {variant == 'secundary' && <LightLogo />}
        </>
    )
}

export default Logo