import React, {useState} from 'react'

export default function FAltura(props){  
    return(<>
        <label> Altura</label>
         <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/> 
    </>);
}