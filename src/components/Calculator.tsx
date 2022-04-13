import React from 'react';
import {Button, type ButtonProps} from './Button';
import {Display} from './Display';

interface CalculatorButtonProps {
    width?: ButtonProps["width"],
    children: ButtonProps["children"]
}

const CalculatorButton = (props: CalculatorButtonProps) => {
    return (
        <Button width={props.width || '50px'} height='50px' color='black' border='1px solid black' center={true}>
            {props.children}
        </Button>
    )
}

export const Calculator = () =>{
    return (
        <div>
            <Display height='100px' width='200px' >0</Display>
            
            <div>
            <CalculatorButton>
                AC
            </CalculatorButton>
            <CalculatorButton>
                =/-
            </CalculatorButton>
            <CalculatorButton>
                %
            </CalculatorButton>
            <CalculatorButton>
                ÷
            </CalculatorButton>

            </div>

            <div>
            <CalculatorButton>
                7
            </CalculatorButton>
            <CalculatorButton>
                8
            </CalculatorButton>
            <CalculatorButton>
                9
            </CalculatorButton>
            <CalculatorButton>
                x
            </CalculatorButton>

            </div>

            <div>

            <CalculatorButton>
                4
            </CalculatorButton>
            <CalculatorButton>
                5
            </CalculatorButton>
            <CalculatorButton>
                6
            </CalculatorButton>
            <CalculatorButton>
                -
            </CalculatorButton>

            </div>

            <div>

            <CalculatorButton>
                1
            </CalculatorButton>
            <CalculatorButton>
                2
            </CalculatorButton>
            <CalculatorButton>
                3
            </CalculatorButton>
            <CalculatorButton>
                +
            </CalculatorButton>
            </div>

            <div>

           

            
            
            <CalculatorButton width='100px'>
                0
            </CalculatorButton>
            <CalculatorButton>
                .
            </CalculatorButton>
            <CalculatorButton>
                =
            </CalculatorButton>

            </div>

            
        
        </div>
    )
}