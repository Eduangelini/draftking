import React from 'react'
import PlusIcon from '../Icon/PlusIcon'

const AddButton = () => {
  return (
    <button
      className='p-1 bg-slate-100 border-2 rounded-full border-yellow-500 flex items-center justify-center text-2xl font-bold'>
      <PlusIcon />
    </button>
  )
}

export default AddButton