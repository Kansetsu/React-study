import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { addTwo, login } from '../../store/actions'


const UseReducer = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <div className="center">

                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem Usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={() => addTwo(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'multiplySeven' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'divideByTwentyFive' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parseInt' })}>Int</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addN', payload: -9 })}>-9</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addN', payload: +8 })}>8</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
