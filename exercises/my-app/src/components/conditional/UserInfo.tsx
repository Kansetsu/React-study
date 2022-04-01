import If from './If'

export default function UserInfo(props: any) {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                Seja bem vindo: <strong>{user.name}</strong>!
            </If>

            <If test={!user || !user.name}>
                Seja bem vindo: <strong>Guest</strong>!
            </If>
        </div>
    )
}