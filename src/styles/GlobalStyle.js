import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100%;
    min-height: 100vh;
}
h2-Title1{
    font-family: Montserrat;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
h2-Title2{
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
h3{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
p-large{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
a-link1{
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
a-link2{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
` 