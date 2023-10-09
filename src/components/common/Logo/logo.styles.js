import styled from "styled-components"

export const StylesLogo = styled.div`
width: auto;
color: ${(props) => props.theme.blue500};
font-family: Montserrat;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const LightLogo = styled(StylesLogo)`
color: ${props => props.theme.white50};
font-family: Montserrat;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`