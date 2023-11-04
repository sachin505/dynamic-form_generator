import React from 'react'
import { MdDelete } from 'react-icons/md';

function CheckBox(props) {
    const {label,required,id}=props.attr;
    return (
        <div className='flex gap-2 items-center'>
           <label className='text-1xl font-semibold'>{label}</label>
            <input type='checkbox' 
                    required={required==='on'? true:false } className='w-3'/> 
                <MdDelete onClick={()=>{props.deleteHandler(id)}} className='cursor-pointer'/>
        </div>
  )}

export default CheckBox