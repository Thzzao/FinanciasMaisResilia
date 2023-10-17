// import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
// import { dataTransacoes } from '../../core/data'
import { getCategorias, getTransacoes } from '../../service/api'
import Button from '../../components/common/Button/Button'
import { StylesTransacoes } from './transacoes.styles'
import { useEffect, useState } from 'react'
import Modal from "../../components/common/Modal/Modal"
// import Textfield from '../../components/common/Textfield/Textfield'

const Transacoes = () => {
    const params = useParams()
    const [listaTransacoes, setListaTransacoes] = useState([])
    const [modalAberto, setModalAberto] = useState(false)
    const [categorias, setCategorias] = useState([])

    async function handleBuscarTransacoes() {
        const resposta = await getTransacoes('a57501f9407c2174825bb862860ec23a', params.tipo)
        setListaTransacoes(resposta.data)
    }

    async function handleBuscarCategorias() {
        const resposta = await getCategorias()
        setCategorias(resposta.data)
    }

    useEffect(() => {
        handleBuscarTransacoes()
    }, [params])

    useEffect(() => {
        if (modalAberto) {
            handleBuscarCategorias()
        }
    }, [modalAberto])

    console.log(params)
    return (
        <>
            <Layout >
                <StylesTransacoes>

                    <section>

                        <h2>{params.tipo.toLocaleUpperCase()}S</h2>
                        <Button
                            onClick={() => setModalAberto(true)}
                            texto={"Adicionar transação"}
                            variant='primary' />
                    </section>
                    <ul>

                        {listaTransacoes.map((transacao) => {
                            return (
                                <Transacao
                                    key={transacao.id}
                                    id={transacao.id}
                                    valor={transacao.valor}
                                    categoria={transacao.categoria}
                                    data={transacao.data}
                                    tipo={transacao.tipo}
                                />
                            )
                        })}
                    </ul>
                </StylesTransacoes>
            </Layout>
            <Modal title={params.tipo} open={modalAberto} onClose={() => setModalAberto(false)}>
                <form>FORMULÁRIOO
                    {/* <Textfield
                        label={ }
                        input
                        label
                        select {categorias.map(categoria)=>{
                            return(
                                <option key={categoria.id} value="categoria.nome">{categoria.nome}</option=>
                            )
                        }}
                        label
                        textarea
                        <button>AKSLSKLSKA</button>
                    /> */}
                </form>
            </Modal>

        </>
    )
}

export default Transacoes