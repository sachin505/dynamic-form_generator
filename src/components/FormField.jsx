import React from 'react'
import TextField from './TextField'
import CheckBox from './CheckBox'
import Button from './Button';
import DropDown from './DropDown';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

function FormField(props) {
    if(props.domProps.fieldName==='Text'){
        return(<TextField attr={props.domProps} deleteHandler={props.deleteFunc}/>)
    }
    if(props.domProps.fieldName==='checkBox'){
        return(<CheckBox attr={props.domProps} deleteHandler={props.deleteFunc} />);
   }
   if(props.domProps.fieldName==='radio'){
    return(<Button attr={props.domProps} deleteHandler={props.deleteFunc} />)
    }
    if(props.domProps.fieldName==='button'){
        return(
            <Button attr={props.domProps} deleteHandler={props.deleteFunc} />
           )
        }
    if(props.domProps.fieldName ==='email'){
        return(
           <EmailField attr={props.domProps} deleteHandler={props.deleteFunc} />
        )
    }
    if(props.domProps.fieldName==='password'){
        return(
           <PasswordField attr={props.domProps} deleteHandler={props.deleteFunc} />
        )
    }
    if(props.domProps.fieldName === 'dropdown'){
        return(<DropDown attr={props.domProps} deleteHandler={props.deleteFunc} />)
    }
  
}

export default FormField