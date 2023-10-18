import { useEffect } from "react";
import styled from "styled-components";
import { temaGlobal } from "../../../styles/theme";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const Notification = ({ open, onClose, type, message }) => {
    const isSuccess = type === 'success'
    const style = {
        success: {
            color: temaGlobal.green500,
            background: temaGlobal.green50,
        },
        error: {
            color: temaGlobal.red500,
            background: temaGlobal.red50,
        },
    };

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                onClose()
            }, 7000)
        }
    }, [open])

    return (
        <>
            {open && message &&
                <StyleNotification
                    color={style[type].color}
                    background={style[type].background}
                >
                    {message}
                    {isSuccess ?
                        <CheckCircle fontSize={32} color={temaGlobal.green500} />
                        :
                        <XCircle fontSize={32} color={temaGlobal.red500} />
                    }
                </StyleNotification>
            }
        </>
    );
};

export default Notification;

const StyleNotification = styled.div`
    position: absolute;
    top: 90px;
    left: calc(50% - (377px / 2));
    display: flex;
    width: 377px;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    background-color: ${(p) => p.background};
    border: 2px solid ${(p) => p.color};
    color: ${(p) => p.color};
    font-weight: bold;
    font-size: 16px;
    z-index: 9;
    border-radius: 4px;
    box-shadow: 2px 2px 5px #22222290 ;
`
