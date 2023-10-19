/* eslint-disable react/prop-types */
import { ArrowLineUp, ArrowLineDown } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'

const Transacao = ({ id, valor, categoria, descricao, data, tipo, handleEditarTransacao, handleAbrirModalDeletar }) => {

    const theme = useTheme()

    return (
        <StylesTransacao>
            {
                tipo === 'entrada' ? <ArrowLineUp size={32} color={theme.green500} /> : <ArrowLineDown size={32} color={theme.red500} />
            }
            <p className='valor'>{valor}</p>
            <p>{categoria}</p>
            <p>{data}</p>
            <button onClick={() => {
                handleEditarTransacao({ id, valor, categoria, descricao, data, tipo })
            }}>Editar</button>
            <button onClick={() => handleAbrirModalDeletar(id)}>Excluir</button>
        </StylesTransacao>
    )
}

export default Transacao

const StylesTransacao = styled.li`
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: ${props => props.theme.white50};

    > .valor{
        font-weight: bold;
    }
`