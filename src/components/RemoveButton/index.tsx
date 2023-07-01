import React from 'react'
import RemoveIcon from '../Icon/RemoveIcon'

const RemoveButton = () => {

  const minus = () => {
    console.log('minus')

  }

  return (
    <button
      onClick={minus}
      className='p-1 bg-slate-100 border-2 rounded-full border-yellow-500 flex items-center justify-center text-2xl font-bold'>
      <RemoveIcon />
    </button>
  )
}

export default RemoveButton