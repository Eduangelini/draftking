import React, { useState } from 'react'
import InputText from '../InputText'
import DropDown from '../DropDown'
import Button from '../Button'

interface FormProps {
  draftEscolhido: (escolha: any) => void
  players: any
}

const Form = (props: FormProps) => {


  const [draft, setDraft] = useState('')
  const [player, setplayer] = useState('')

  /* POR PADRÃO(Default), ao clicar no botao do form o next recarrega a página. Para
  evitar que a página seja recarrega é adicionado um evento para previnir o
  comportamento padrão (preventDefault) e assim ao clicar a página não carregar,
  apenas renderiza o novo estado. 
  */
  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    props.draftEscolhido({
      draft,
      player,
    })
    setDraft('')
    setplayer('')
  }

  return (
    <div>
      <form
        action=""
        className='flex flex-col gap-y-8'
        onSubmit={handleSubmit}
      >
        <InputText
          label='Draft:'
          placeholder='Qual seu Draft?'
          obrigatorio={true}
          value={draft}
          aoAlterado={value => setDraft(value)}
        />
        <DropDown
          label='Jogadores:'
          itens={props.players}
          obrigatorio={true}
          value={player}
          aoAlterado={value => setplayer(value)}
        />
        <Button>
          Adicionar Draft
        </Button>
      </form>
    </div>
  )
}

export default Form