export default function ComParametro(props: any) {
    const status: string = props.grade >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong>
                tem nota
                <strong> { props.grade } </strong>
                <br/> status: 
                <strong> { status }</strong>!
            </p>
        </div>
    )
}