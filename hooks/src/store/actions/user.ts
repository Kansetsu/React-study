export function login(dispatch: any, name: any) {
    dispatch({ type: 'login', payload: name })
}