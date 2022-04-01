import './Card.css'
import React from "react";

export default function Cards(props: any) {
    return (
        <div className='Card'>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'> {props.children} </div>
           
        </div>
    )
}