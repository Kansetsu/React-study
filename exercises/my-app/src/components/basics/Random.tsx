import React from "react";

export default function Random(props: any) {
    
   const { min, max } = props
    const randomNumber: any = Math.ceil(Math.random() * (max - min) + min)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {min} </p>
            <p><strong>Valor Máximo: </strong> {max} </p>
            <p><strong>Valor Escolhido: </strong> {randomNumber} </p>

        </div>
    )
}