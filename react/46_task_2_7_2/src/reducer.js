const initialState = {
    users : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADUSER': 
        return {users: action.value}

        case 'SEARCHUSER':
        return {users: action.value}

        default: 
            return state;
    }
}

export default reducer;