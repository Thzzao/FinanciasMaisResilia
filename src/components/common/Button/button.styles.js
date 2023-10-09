import styled from "styled-components"

export const StylesButton = styled.button`
width: auto;
background-color: ${(props) => props.theme.blue700};
padding: 12px 24px;
outline: none;
color: ${props => props.theme.white50};
`

export const PrimaryButton = styled(StylesButton)`
width: ${props => props.withd ? props.width : 'fit-content'};
background-color: ${(props) => props.theme.blue700};
border: none;
color: ${props => props.theme.white50};
`


export const SecondaryButton = styled(StylesButton)`
background: transparent;
border: 1px solid ${(props) => props.theme.blue700};
color: ${props => props.theme.blue700};
`
/* FAZER O HOVER */