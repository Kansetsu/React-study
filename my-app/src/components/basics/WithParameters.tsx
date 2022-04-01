export default function ComParametro(props: any) {
    const status: string = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota
                <strong> { props.nota } </strong>
                <br/> status: 
                <strong> { status }</strong>!
            </p>
        </div>
    )
}