import React from 'react'
import { MdDelete } from 'react-icons/md';

function Button(props) {
    const {label,id}=props.attr;
    return (
      <div className='flex gap-2 items-center'>
          <input type='submit' value={label} className='bg-yellow-400 text-white p-1 rounded-lg w-64 cursor-pointer'/>
          <MdDelete onClick={()=>{props.deleteHandler(id)}} className='cursor-pointer'/>
      </div>      
)}

export default Button