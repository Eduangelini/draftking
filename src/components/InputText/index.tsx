import React from 'react'

interface InputTextProps {
  label?: string
  placeholder?: string
  obrigatorio?: boolean
  value?: string
  aoAlterado: (value: string) => void
}

const InputText = (props: InputTextProps) => {

  /* Essa constante reconhece tudo que está sendo dentro do input do formulario,
  letra por letra! 
  --> Apesar de fazer a mesma coisa, não é a mesma constante do Dropdown, só foi usado o mesmo nome da constanta por conveniencia
  */
  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <label className='font-bold text-2xl text-left' htmlFor="draft">
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={handleChange}
        className='border-2 border-yellow-500 px-2 py-3 w-64 rounded-xl font-bold text-lg cursor-pointer text-black'
        type="text"
        id="draft"
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  )
}

export default InputText