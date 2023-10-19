import styled from "styled-components";

export const StylesHeader = styled.header`
    display: flex;
    width: 100%;
    padding: 12px 12px;
    justify-content: space-between;
    align-items: center;

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
}

.titulo {
    color:${(props) => props.theme.blue500};
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
    color:${(props) => props.theme.blue500};
    font-family: Montserrat;
    text-decoration: none;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
link:hover {
    opacity: 0.7;
}

`