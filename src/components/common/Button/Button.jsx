// import React from 'react'

import { PrimaryButton, SecondaryButton } from "./button.styles"

const Button = ({ variant, texto, width, onClick }) => {
    return (
        <>
            {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{texto}</PrimaryButton>}
            {variant == 'secundary' && <SecondaryButton onClick={onClick} width={width}>{texto}</SecondaryButton>}
        </>
    )
}

export default Button