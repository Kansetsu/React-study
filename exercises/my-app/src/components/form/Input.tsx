import { useState } from "react"
import './Input.css'

export default function Input(props: any) {

    const [value, setValue] = useState('Inicial')
    function changeState(e: any) {
        setValue(e.target.value)

    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <input value={value} onChange={changeState} />
            <input value={value} readOnly />
        </div>
    )
}
