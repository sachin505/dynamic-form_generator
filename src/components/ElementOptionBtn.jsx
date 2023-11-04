import React from 'react'
import Button from './Button'

function ElementOptionBtn(props) {
    const {label,onSelect,type}=props;
  return (
   <button onClick={()=>onSelect(type)} className='bg-blue-400 p-2 rounded-md w-32'>
        {label}
    </button>
  )
}

export default ElementOptionBtn