import React, {useState} from 'react'

export default function FPeso(props){  
    return(<>
        <label> Peso</label>
         <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/> 
    </>);
}