import React, { useState } from 'react'
import FormField from '../components/FormField';
import { MdDelete } from 'react-icons/md';
import {FaArrowCircleDown} from 'react-icons/fa' 
import { useParams } from 'react-router-dom';
import ElementOptionBtn from '../components/ElementOptionBtn';


function CreateFormPage() {
    const [hideBtns,setHideBtns]=useState(false);
    const [listOfElements,setListOfElements]=useState([]);
    const [fieldAttributes,setFieldAttributes]=useState({});
    const [fieldName,setFieldName]=useState("");
    const [domElements,setDomElements]=useState([]);
    const [showDrpDown,setShowDropDown]=useState(false);
    const [optionList,setOptionList]=useState([]);
    const {formName}=useParams();
    const [hideRequired,setHideRequired]=useState(false);
    
    const listOfElemnts=['Text','checkBox','dropdown','button','email','password'];

    const btnClickHandler=(field)=>{
        setHideBtns(true);
        
        if(field==='Text'){ 
            setIsRangable(true)
        }
        else if(field==='dropdown'){
            setShowDropDown(true);
        }
        else if(field==='button'){
            setHideRequired(true);
        }
        else{
            setShowDropDown(false)
        }
        setFieldName(field);
        
    }
    const onChangeHandler=(event)=>{
        setFieldAttributes({...fieldAttributes,[event.target.id]:event.target.value});
        console.log(fieldAttributes);
    }
    const deleteOptionHandler=(opt)=>{
        const newOptionList=optionList.filter((option)=>opt!=option)
        setOptionList(newOptionList);
    }
    const addOptionToList=(event)=>{
        if(event.target.value==='')return;
        setOptionList([...optionList,event.target.value]);
        event.target.value=''
    }
    const getId=()=>{
        const min = 1;
        const max = 100000;
        return parseInt(Math.random() * (max - min) + min);
    }
    const applyHandler=()=>{
            const idAttributes={
                fieldName:fieldName,
                id:getId()
            }
            let completeDomElement={...idAttributes,...fieldAttributes};
            if(fieldName==='dropdown'){
                completeDomElement={...completeDomElement,optionList:optionList}
                
            }
            resetAll();
            setDomElements([...domElements,completeDomElement]);
            setListOfElements([...listOfElements,fieldName]);
           
            console.log(completeDomElement);
    }
    const resetAll=()=>{
        setHideBtns(false);
        setOptionList([]);
        setHideRequired(false);
        setShowDropDown(false);
    }
    const cancelHandler=()=>{
        resetAll();
    }
    const deleteHandler=(id)=>{
        alert(id);
        const newDomElements=domElements.filter((element)=>id!=element.id);
        setDomElements(newDomElements);
    }
    const saveFormConfig=()=>{
        console.log(JSON.stringify(domElements));
        localStorage.setItem('formConfig',JSON.stringify(domElements));
    }
    console.log("the dom elements are ",domElements);
  return (
    <div>
        {/* option buttons*/}
        {!hideBtns && <div className='flex flex-wrap justify-around mt-3'>
            {listOfElemnts.map(element=>
            <ElementOptionBtn label={element} onSelect={btnClickHandler} type={element}></ElementOptionBtn>)}
        </div>}

        {/** Attributes collection form*/}
        {hideBtns && 
        <div className='flex-col mt-5'>
                <div className='flex justify-center gap-2'>
                    <label>Enter Label Name</label>
                    <input type="text" className='border border-gray-300 p-1 rounded-lg' placeholder='Enter Label' id="label" onChange={onChangeHandler}/> 
                </div>

                  {showDrpDown && <div className='flex justify-center gap-2'>
                    <label>Enter your Options for dropdown</label>
                    <div className='flex-col'>
                        <input type='text' id="option" onBlur={addOptionToList} className='border border-gray-300 p-1'/>
                        <ul>
                            {optionList.map((option)=>
                                <span className='flex gap-2 justify-center text-lg'>
                                    <li>{option}</li>
                                    <MdDelete onClick={()=>{deleteOptionHandler(option)}}/>
                                </span>
                            )}
                        </ul>
                    </div>
                </div>  
                }

                {!hideRequired && <div className='flex justify-center gap-2'>
                    <label>Required :</label>
                    <input type='checkbox' id="required" onChange={onChangeHandler}/>
                </div>}

                <div className='flex justify-between my-4'>
                    <button id="apply" className='bg-green-700 text-white p-2 rounded-sm'onClick={applyHandler} >Apply</button>
                    <button id="cancel" className='bg-red-700 text-white p-2 rounded-sm' onClick={cancelHandler}>Cancel</button>
                </div>
        </div>
}
        <hr className='my-4 border-t border-gray-800'/>
        <h1 className='font-semibold m-5 flex justify-center text-3xl'>{formName}</h1>

        {/* form rendering done here */}
        <div className='flex justify-center'>
            <form id='form' className='flex flex-col gap-4' type='submit'>
                {domElements.map((domProps,i)=><FormField key={i} domProps={domProps} deleteFunc={deleteHandler}/>)}
            </form>
        </div>

        {/*save button*/}
        <div className='h-screen flex flex-col relative'>
            {domElements.length >0 &&
            <button 
            onClick={saveFormConfig}
            className='bg-green-500 text-xl p-1 rounded-md absolute top-4 right-4'>
                <span className='flex items-center gap-3'>
                   <p> Save</p>
                    <FaArrowCircleDown />
                </span>
            </button>}
        </div>
    </div>
  )
}

export default CreateFormPage