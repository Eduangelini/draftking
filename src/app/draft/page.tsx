'use client'

import PlayerNames from '@/components/PlayerNames'
import Form from '@/components/Form'
import Arrow from '@/components/Icon/Arrow'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function DraftGame() {

  const players = [
    {
      nome: 'Jogador 1',
      textColor: 'text-red-500',
    },
    {
      nome: 'Jogador 2',
      textColor: 'text-blue-500',
    },
    {
      nome: 'Jogador 3',
      textColor: 'text-green-500',
    },
    {
      nome: 'Jogador 4',
      textColor: 'text-yellow-500',
    },
    {
      nome: 'Jogador 5',
      textColor: 'text-purple-500',
    },
  ]

  const [escolhido, setEscolhido] = useState<any[]>([])

  const novoDraftEscolhido = (escolha: any) => {
    setEscolhido([...escolhido, escolha])
  }

  return (
    <>
      <div className='w-12 h-12 bg-slate-100 mx-14 my-1 border-2 rounded-xl border-yellow-500 flex items-center justify-center text-2xl font-bold'>
        <Link href="/">
          <Arrow />
        </Link>
      </div>
      <section className='text-white flex flex-col items-center gap-y-10 mt-3'>
        <Image src="../assets/logo-dk.svg" alt="Logo" width={500} height={500} />
        <Form
          players={players.map(player => player.nome)}
          draftEscolhido={(escolha: any) =>
            novoDraftEscolhido(escolha)}
        />

        {players.map(player =>
          <PlayerNames
            key={player.nome}
            jogador={player.nome}
            escolhido={escolhido.filter(escolha => escolha.player === player.nome)}
          />
        )}

      </section>

    </>
  )
}

export default DraftGame