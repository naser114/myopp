import React from 'react';


export default function wrapper(props){
    return(
        <div>
            {
                props.children
            }
        </div>
    )
}