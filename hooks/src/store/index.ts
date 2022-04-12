import { reducer } from "./reducers"
import { addTwo } from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export { reducer, initialState, addTwo }
