import styled from "styled-components"

export const StylesContainer = styled.div`
display: flex;
width: 1440px;
height: 1024px;
justify-content: space-between;
align-items: center;
background-color: ${(props) => props.theme.blue500};

.imagem{
    width: 678px;
    height: 698px;
    flex-shrink: 0;
}

.formulario{
    display: flex;
    width: 661px;
    padding: 48px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 16px 0px 0px 16px;
    background: ${(props) => props.theme.white200};
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25), 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
}

form{
    /* width: 565px;
    height: 612px; */
}

header{
    display: inline-flex;
    padding: 19px 0px;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
h2{
    display: flex;
    width: 166px;
    height: 46px;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.blue500};
    /* CAHAMR H2 TITULO 2 */
}

.inputNome{
    display: inline-flex;
    align-items: center;
    gap: 24px;
}

.nome{
    display: flex;
    padding: 6px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
    align-self: stretch;
}

.sobrenome{
    display: flex;
    padding: 6px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
}

.inputs{
    display: flex;
    width: 565px;
    padding: 6px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

label{
    display: flex;
    width: 195px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    /* Chamar P larg  */
}

input{
    display: flex;
    padding: 8px 12px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    background: ${(props) => props.theme.white50};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

.login{
    display: flex;
    width: 547px;
    align-items: center;
}

a{
    display: flex;
    width: 156px;
    height: 38px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
}

.link{
    /* Chamar A - Link */
    display: flex;
    width: 121px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color:${(props) => props.theme.blue700};
}

.nome{
    display: flex;
    padding: 6px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
    align-self: stretch;
}
`