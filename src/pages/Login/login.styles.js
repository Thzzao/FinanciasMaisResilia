import styled from "styled-components"

export const StylesBody = styled.div`
background-color: ${(props) => props.theme.blue500};
display: flex;
width: 1440px;
height: 1024px;
padding: 200px;
flex-direction: column;
justify-content: center;
align-items: center;

.container{
    display: flex;
    padding: 48px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 16px;
    background: ${(props) => props.theme.white50};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25), 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
}

.formulario{
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    border-radius: 16px;
    background: ${(props) => props.theme.white200};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

label{
    color:#000;
    /* Chamar o p large */
}

input{
    display: flex;
    padding: 8px 12px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

a{
    display: flex;
    width: 233px;
    height: 38px;
    flex-direction: column;
    justify-content: center;
    color:#000;
    /* Chamar o p large */
}

.link{
    display: flex;
    width: 141px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.blue700};
    /* Chamar: A - link 2 */
}

.imagem{
    width: 500px;
    height: 500px;
}
`
