import IndirectChild from './IndirectChild'
import { useState } from 'react'

export default function Father(props: any) {
    const [name, setName]  = useState('?')
    const [age, setAge]  = useState(0)
    const [bool, setBool]  = useState(false)
    function ProvideInformacions(name: string, age: number, bool: boolean) {
        setName(name)
        setAge(age)
        setBool(bool)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong> </span>
                <span> {bool ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndirectChild whenClick={ProvideInformacions}></IndirectChild>
        </div>
    )
}