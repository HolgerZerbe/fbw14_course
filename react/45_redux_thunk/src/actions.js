// wir definieren globale, asynchrone Funtkion
// die nach beendigung Nachricht an Dispatcher schickt


export const loadUsers = () => async dispatch => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const obj = await result.json();

    dispatch({
        type: 'LOAD_USERS',
        value: obj
    })
}