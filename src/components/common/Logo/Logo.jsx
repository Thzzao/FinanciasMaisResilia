// import React from 'react'
import { StylesLogo, LightLogo } from './logo.styles'

const Logo = ({ variant }) => {
    return (
        <>
            {variant == 'Default' && <StylesLogo />}
            {variant == 'Light' && <LightLogo />}
        </>
    )
}

export default Logo