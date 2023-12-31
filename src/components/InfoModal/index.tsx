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
          <div className='flex flex-col gap-y-4 indent-2'>
            <p className='flex justify-center text-2xl'>
              Como jogar:
            </p>
            <p>
              1. Após clicar em &quot;Play Now&quot;, defina um tema com os seus adversários.
            </p>
            <p>
              2. Cada jogador terá que escolher algo relacionada ao tema. Por exemplo: O tema é &quot;Filmes&quot;, então o jogador pode escolher &quot;Harry Potter&quot; ou qualquer outro item que se encaixe no tema escolhido.
            </p>
            <p>
              -&gt; Importante: A quantidade de itens em cada Draft é definido junto com o tema. Por exemplo: O tema é &quot;Filmes&quot; e o Draft é de 5 itens, então cada jogador terá que escolher 5 filmes.
            </p>
            <p>
              -&gt; Importante: Os jogadores escolhem na ordem crescente &#40;do jogador 1 ao jogador 5&#41;, o último jogador faz duas escolhas e as escolhas voltam em ordem descrecente &#40;do jogador 5 ao jogador 1&#41;.
            </p>
            <p>
              3. Após todos os jogadores terem o seu Draft montado é a hora da votação. Só pode votar quem nao participou do Draft, adicione ao contador do Draft cada vez que o mesmo receber um voto e depois que todos votarem, o jogador com mais votos ganha.
            </p>
            <p>
              -&gt; Importante: O voto é feito no Draft como um todo, não em um item específico.
            </p>
            <p>
              4. O nome de cada participante é &quot;Jogador&quot; para manter o anonimato e evitar votos tendenciosos.
            </p>
            <p>
              -&gt; Importante: Bom jogo e DIVIRTA-SE.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal