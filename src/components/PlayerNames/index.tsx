import React from 'react'
import PlayerDrafts from '../PlayerDrafts'
import Scoreboard from '../Scoreboard'

interface PlayerNamesProps {
  jogador?: string
  escolhido: any[]
}

const PlayerNames = (props: PlayerNamesProps) => {
  return (
    (props.escolhido.length > 0) &&
    (
      <section className='flex flex-col w-64'>
        <section>
          <h2 className='text-left font-bold text-2xl mt-5' >{props.jogador}</h2>
          <div className='flex text-center justify-between mt-5'>
            <Scoreboard />
            <div className='flex flex-col items-start justify-center text-lg w-48 gap-y-4'>
              {props.escolhido.map(escolha =>
                <PlayerDrafts
                  key={escolha.draft}
                  drafts={escolha.draft}
                />
              )}
            </div>
          </div>
        </section>
      </section>
    )
  )
}

export default PlayerNames