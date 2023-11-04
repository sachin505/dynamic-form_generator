import React from 'react'
import {MdDelete} from 'react-icons/md';

function TextField(props) {
  console.log(props.attr);
  const {label,required,id}=props.attr;
  return (
    <div className='flex-col gap-2'>
       <label className='text-1xl font font-semibold'>{label}</label>
       
        <div className='flex gap-2 items-center'>
          <input type='text'  
                required={required==='on'? true:false}
                className='border p-1 rounded-lg w-64'
          /> 
        <MdDelete onClick={()=>{props.deleteHandler(id)}} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default TextField