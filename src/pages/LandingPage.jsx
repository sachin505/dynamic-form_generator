import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage=()=>{
    const navigate=useNavigate();
    const [showInput,setShowInput]=useState(false);
    const [formName,setFormName]=useState('');

    const proceedHandler=()=>{
        if(formName==='')return;
        navigate(`/create-form/${formName}`)
    }
    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl"><i>Welcome to Dynamic Form generater</i></h1>
        <button className="bg-purple-700 p-2 rounded-md my-20 text-white" onClick={()=>{setShowInput(true)}}>Create Form</button>

            {showInput &&<div className="flex gap-4">
                <input className="border border-black p-1 rounded-lg max-w-lg" placeholder="form name" onChange={(event)=>setFormName(event.target.value)}/>
                <button className="bg-green-700 p-2 rounded-md text-white" onClick={proceedHandler}>proceed</button>
            </div>}
    </div>
    )
}

export default LandingPage;