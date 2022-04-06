import { useState } from "react"
import './Mega.css'

export default function Mega(props: any) {
    function generateNumberOut(min: number, max: number, array: number[]): number {
        const random: number = Math.random() * (max - min) + min
        return array.includes(random) ? generateNumberOut(min, max, array) : random
    }

    function generateNumbers(quantity: number) {
        const numbers = Array(quantity).fill(0).reduce((nums) => {
            const newNumber = generateNumberOut(1, 60, nums).toFixed()
            return [...nums, newNumber]
        }, []).sort((n1: number, n2: number) => n1 - n2)

        return numbers
    }
    const [qtd, setQtd] = useState(props.quantity || 6)
    const initialNumbers: number[] = generateNumbers(qtd)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input min={6} max={15} type="number" value={qtd} onChange={e => {
                    setQtd(+e.target.value)
                    setNumbers(generateNumbers(+e.target.value))
                }} />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(qtd))}>Gerar Números</button>
        </div>
    )
}