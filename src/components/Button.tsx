import React from 'react';

export interface ButtonProps {
    width: string;
    height: string;
    borderRadius?: string;
    color: string;
    border?: string;
    children?: React.ReactNode;
    center?: boolean;
}

export const Button = (props: ButtonProps) => {
    let centerStyles = {};
    if (props.center) {
        centerStyles = {
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
    return (
        <button style={{
            width:props.width,
            color:props.color,
            height:props.height,
            borderRadius:props.borderRadius,
            border:props.border,
            boxSizing:'border-box',
            ...centerStyles
        }}>{props.children}</button>
    )
}
