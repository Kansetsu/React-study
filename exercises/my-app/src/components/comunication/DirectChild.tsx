export default function Child(props: any) {
    return (
        <div>
            <span><strong>Nome: </strong> {props.name} </span>
            <span><strong>Idade: </strong>{props.age} </span>
            <span><strong>Está vivo ? </strong>{props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}