
export default function Child(props: any) {
    return (
        <div>
            <div>Filho</div>
            <button onClick={e => { props.whenClick('João', 53, true) }}>Fornecer Informações</button>
        </div>

    )
}