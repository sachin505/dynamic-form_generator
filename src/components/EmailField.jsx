import React from 'react'
import { MdDelete } from 'react-icons/md';

function EmailField(props) {
    const {placeholder,label,required,id}=props.attr;
    return (
      <div className='flex-col gap-2'>
         <label className='text-1xl font-semibold'>{label}</label>
         <div className='flex gap-2 items-center'>
          <input type='email' 
                 className='border p-1 rounded-lg w-64'
                  placeholder={placeholder} 
                  required={required==='on'? true:false }
          /> 
          <MdDelete onClick={()=>{props.deleteHandler(id)}} className='cursor-pointer'/>
          </div>
      </div>
    )}

export default EmailField