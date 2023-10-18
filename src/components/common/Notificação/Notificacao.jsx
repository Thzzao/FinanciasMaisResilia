/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { NotificacaoStyle } from "./notificacao.style"


const Notificacao = ({ texto, tipo, open, fecharNotificacao }) => {
    useEffect(() => {
        if (open === true) {
            setTimeout(() => {
                fecharNotificacao()
            }, 3000)
        }
    }, [open])
    return (
        <NotificacaoStyle className={tipo === 'Sucesso' ? 'Sucesso' : 'Falha'}>
            <p>{texto}</p>
        </NotificacaoStyle>
    )
}

export default Notificacao