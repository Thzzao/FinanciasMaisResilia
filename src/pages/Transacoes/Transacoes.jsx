// import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
// import { dataTransacoes } from '../../core/data'
import { deleteTransacao, getCategorias, getTransacoes, postTransacao, putTransacao } from '../../service/api'
import Button from '../../components/common/Button/Button'
import { StylesTransacoes } from './transacoes.styles'
import { useEffect, useState } from 'react'
import Modal from "../../components/common/Modal/Modal"
// import Textfield from '../../components/common/Textfield/Textfield'
// import Input from '../../components/common/Input/Input'
import Notificacao from '../../components/common/Notificação/Notificacao'

const Transacoes = () => {
    const params = useParams()

    const [listaTransacoes, setListaTransacoes] = useState([])
    const [categorias, setCategorias] = useState([])

    const [modalAberto, setModalAberto] = useState(false)
    const [abrirNotificacao, setAbrirNotificacao] = useState(false)

    const [valorTransacao, setValorTransacao] = useState("")
    const [descricaoTransacao, setDescricaoTransacao] = useState("")
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("")
    const [dataTransacao, setDataTransacao] = useState("")
    const [idTransacao, setIdTransacao] = useState("")
    const [infosNotificacao, setInfosNotificacao] = useState({
        tipo: '',
        texto: ''
    })

    const [emEdicao, setEmEdicao] = useState(false)
    const [modalDeletar, setModalDeletar] = useState(false)

    function handleEditarTransacao(transacao) {
        setEmEdicao(true)
        setModalAberto(true)
        setValorTransacao(transacao.valor)
        setCategoriaSelecionada(transacao.categoria)
        setDescricaoTransacao(transacao.descricao)
        setDataTransacao(transacao.data)
        setIdTransacao(transacao.id)
        console.log(transacao)
    }

    async function handlePutTransacao() {
        const body = {
            valor: valorTransacao,
            descricao: descricaoTransacao,
            categoria: categoriaSelecionada,
            data: dataTransacao,
            tipo: params.tipo
        }
        const resposta = await putTransacao(idTransacao, body, 'a57501f9407c2174825bb862860ec23a')
        console.log(resposta)
        setModalAberto(false)

        setInfosNotificacao([{
            texto: resposta.success ? 'Transação editada com sucesso' : 'Erro ao editar transação',
            tipo: resposta.success ? 'sucesso' : 'falha'
        }])
        setAbrirNotificacao(true)
        handleBuscarTransacoes()
        setEmEdicao(false)
    }

    async function handleBuscarTransacoes() {
        const resposta = await getTransacoes('a57501f9407c2174825bb862860ec23a', params.tipo)
        setListaTransacoes(resposta.data)
    }

    async function handleBuscarCategorias() {
        const resposta = await getCategorias()
        setCategorias(resposta.data)
    }

    async function handleSalvarTransacao() {
        const body = {
            descricao: descricaoTransacao,
            categoria: categoriaSelecionada,
            valor: valorTransacao,
            tipo: params.tipo
        }
        const resposta = await postTransacao(body, 'a57501f9407c2174825bb862860ec23a')
        if (resposta.success) {
            handleBuscarTransacoes()
        }
        setInfosNotificacao({
            tipo: resposta.success ? 'sucesso' : 'falha',
            texto: resposta.success ? 'Transação adicionada com sucesso' : 'Falha ao adicionar transação'
        })
        setAbrirNotificacao(true)
        setModalAberto(false)
    }

    async function handleDeletarTransacao() {
        const resposta = await deleteTransacao(idTransacao, 'a57501f9407c2174825bb862860ec23a')
        setModalDeletar(false)

        handleBuscarTransacoes()

        setInfosNotificacao({
            texto: resposta.success ? 'Transação excluída com sucesso' : 'Falha ao excluir transação',
            tipo: resposta.success ? 'sucesso' : 'falha'
        })
        setAbrirNotificacao(true)
    }

    function handleAbrirModalDeletar(idTransacao) {
        setIdTransacao(idTransacao)
        setModalDeletar(true)
    }

    useEffect(() => {
        handleBuscarTransacoes()
    }, [params])

    useEffect(() => {
        if (modalAberto) {
            handleBuscarCategorias()
        }

    }, [modalAberto])

    return (
        <>
            <Layout >
                <StylesTransacoes>
                    <section>
                        <h2>{params.tipo.toLocaleUpperCase()}</h2>
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
                                    handleEditarTransacao={handleEditarTransacao}
                                    handleAbrirModalDeletar={handleAbrirModalDeletar}
                                />
                            )
                        })}
                    </ul>
                </StylesTransacoes>
            </Layout>

            {/* Criar e editar transação */}
            <Modal title={params.tipo} open={modalAberto} fechaModal={() => setModalAberto(false)}>
                <div>
                    {/* <Textfield nome="valor" label="Valor" /> */}
                    <label>Valor</label>
                    <input type="text" id="valor" onChange={(e) => setValorTransacao(e.target.value)} value={valorTransacao} />
                    {/* <Textfield nome="categoria" label="Categoria" /> */}
                    <label>Categoria</label>
                    <select id="categoria" onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                        <option value='{categoria.nome}'>Selecione uma opção</option>
                        {
                            categorias.map((categoria) => {
                                return (
                                    <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
                                )
                            })
                        }
                    </select>
                    {/* <Textfield nome="descricao" label="Descrição" /> */}
                    <label>Descrição</label>
                    <textarea id="descricao" cols="30" rows="10" onChange={(e) => setDescricaoTransacao(e.target.value)} value={descricaoTransacao}></textarea>
                    <button onClick={emEdicao ? handlePutTransacao : handleSalvarTransacao}>{emEdicao ? 'Salvar alterações' : 'Adicionar'}</button>
                </div>
            </Modal>

            {/* Para excluir transação */}
            <Modal open={modalDeletar} title={'Excluir'} fechaModal={() => { setModalDeletar(false) }}>
                <h3>Você deseja excluir essa transação?</h3>
                <Button texto={'Sim'} variant={'primary'} onClick={() => { handleDeletarTransacao() }} />
            </Modal>

            {
                abrirNotificacao &&
                <Notificacao
                    texto={infosNotificacao.texto}
                    tipo={infosNotificacao.tipo}
                    open={abrirNotificacao}
                    fecharNotificacao={() => setAbrirNotificacao(false)}
                />
            }
        </>
    )
}

export default Transacoes