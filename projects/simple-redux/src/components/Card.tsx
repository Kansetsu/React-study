import './Card.css'

export const Card = (props: any) => {
    return (
        <div className='Card'>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}