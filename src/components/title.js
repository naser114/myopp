import React from 'react';


export default function title(props){
    return(
        
        <h1 style ={props.style}>
        {props.children}
        </h1>
        
       
    )
}