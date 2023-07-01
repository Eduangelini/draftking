import React, { useState } from 'react'
import PlusIcon from '../Icon/PlusIcon'
import RemoveIcon from '../Icon/RemoveIcon'

const Scoreboard = () => {
  const [score, setScore] = useState(0);

  const more = () => {
    setScore(score + 1);
  };

  const minus = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-y-3'>
      <button
        onClick={more}
        className='p-1 bg-slate-100 border-2 rounded-full border-yellow-500 flex items-center justify-center text-2xl font-bold'
      >
        <PlusIcon />
      </button>
      <p className='text-2xl font-bold'>{score}</p>
      <button
        onClick={minus}
        className='p-1 bg-slate-100 border-2 rounded-full border-yellow-500 flex items-center justify-center text-2xl font-bold'
      >
        <RemoveIcon />
      </button>


    </div>
  )
}

export default Scoreboard