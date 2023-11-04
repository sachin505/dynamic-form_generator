import React from 'react'
import { MdDelete } from 'react-icons/md';

function DropDown(props) {
    const {id,label,optionList}=props.attr;
        return (
            <div className='flex-col gap-2'>
               <label className='text-1xl font-semibold'>{label}</label>
               <div className='flex gap-2 items-center'> 
                <select className='border p-1 rounded-lg w-64'>
                    {optionList.map((optValue)=><option key={optValue}>{optValue}</option>)}
                </select>
                <MdDelete onClick={()=>{props.deleteHandler(id)}} className='cursor-pointer'/>
                </div>
            </div>
      )}

export default DropDown