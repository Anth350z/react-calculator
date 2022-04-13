import React from 'react';


interface DisplayProps {
    width: string;
    height: string;
    children?: React.ReactNode;
}


export const Display = (props:DisplayProps)=>{
    return (
        <div style={{
            width:props.width,
            height:props.height,
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            fontSize: 'xxx-large'
        }}
        >{props.children}</div>
    )
}