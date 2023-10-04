import styled from "styled-components";

export const StylesHeader = styled.header`
    display: flex;
    width: 1212px;
    padding: 12px 0px;
    justify-content: space-between;
    align-items: center;

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
}

.titulo {
    color: #457B9D;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.lista {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

.link {
    color: #457B9D;
    font-family: Montserrat;
    text-decoration: none;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`

