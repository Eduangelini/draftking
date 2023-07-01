import React from 'react'

interface DropDownProps {
  itens?: any
  label?: string
  obrigatorio?: boolean
  value?: string
  aoAlterado: (value: string) => void
}

const DropDown = (props: DropDownProps) => {

  /* Essa constante reconhece tudo que está sendo dentro do input do formulario,
  letra por letra! 
  --> Apesar de fazer a mesma coisa, não é a mesma constante do InputText, só foi usado o mesmo nome da constanta por conveniencia
  */
  const handleChange = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <label
        htmlFor="dropdown"
        className='font-bold text-2xl text-left'
      >
        {props.label}
      </label>

      <select
        id='dropdown'
        className='border-2 border-yellow-500 px-2 py-3 w-64 rounded-xl font-bold text-lg cursor-pointer text-slate-500'
        required={props.obrigatorio}
        value={props.value}
        onChange={handleChange}
      >
        <option value="">Selecione o Jogador:</option>
        {props.itens.map((item: any) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div >
  )
}

export default DropDown