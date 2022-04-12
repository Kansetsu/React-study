export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'addTwo':
            return { ...state, number: state.number + 2 }
        case 'multiplySeven':
            return { ...state, number: state.number * 7 }
        case 'divideByTwentyFive':
            return { ...state, number: state.number / 25 }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'addN':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}