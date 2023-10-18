import styled from "styled-components"

export const NotificacaoStyle = styled.div`
    display: flex;
    width: 23.5625rem;
    padding: 0.75rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 10vh;
    left: calc(50% - 125px);

    &.sucesso{
        border: 2px solid ${props => props.theme.green500};
        background: ${props => props.theme.green500};
        color: ${props => props.theme.green500};
    }
    &.falha{
        border: 2px solid ${props => props.theme.red500};
        background: ${props => props.theme.red500};
        color: ${props => props.theme.red500};
    }
`