'use client'

import React from 'react'
import EscIcon from '../Icon/EscIcon'

interface InfoModalProps {
  open: boolean
  onClose: () => void
}

const InfoModal = (props: InfoModalProps) => {
  if (!props.open) return null

  return (
    <div className='absolute top-2'>
      <button
        className='relative top-7 left-[255px] w-10 h-10 bg-purple-600 mx-2 my-2 border-2 border-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold z-10'
        onClick={props.onClose}
      >
        <EscIcon />
      </button>
      <div className='bg-slate-100 border-yellow-400 overflow-auto scroll-smooth opacity-80 h-[550px] w-[300px] absolute border-2 rounded-xl mx-[36px] '>

        <div
          className='h-full w-full flex items-start mt-6 p-3 justify-start text-lg font-bold'
        >
          <ul className='flex flex-col gap-y-4 indent-2'>
            <li className='flex justify-center text-2xl'>
              Como jogar:
            </li>
            <li>
              Após clicar em "Play Now", defina um tema com os seus adversários.
            </li>
            <li>
              Cada jogador terá que escolher algo relacionada ao tema. Por exemplo: O tema é "Filmes", então o jogador pode escolher "Harry Potter" ou qualquer outro item que se encaixe no tema escolhido.
            </li>
            <li>
              Importante: A quantidade de itens em cada Draft é definido junto com o tema. Por exemplo: O tema é "Filmes" e o Draft é de 5 itens, então cada jogador terá que escolher 5 filmes.
            </li>
            <li>
              Importante: Os jogadores escolhem na ordem crescente (do jogador 1 ao jogador 5), o último jogador faz duas escolhas e as escolhas voltam em ordem descrecente(do jogador 5 ao jogador 1).
            </li>
            <li>
              Após todos os jogadores terem o seu Draft montado é a hora da votação. Só pode votar quem nao participou do Draft, adicione ao contador do Draft cada vez que o mesmo receber um voto e depois que todos votarem, o jogador com mais votos ganha.
            </li>
            <li>
              Importante: O voto é feito no Draft como um todo, não em um item específico.
            </li>
            <li>
              O nome de cada participante é "Jogador" para manter o anonimato e evitar votos tendenciosos.
            </li>
            <li>
              Importante: Bom jogo e DIVIRTA-SE.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoModal