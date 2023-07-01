import React from 'react'

interface ButtonProps {
  texto?: string
  children?: React.ReactNode
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className='text-white bg-purple-800 border-2 border-yellow-500 w-64 text-center py-3 rounded-xl font-bold text-lg cursor-pointer'
    >
      {props.children}
    </button>
  )
}

export default Button