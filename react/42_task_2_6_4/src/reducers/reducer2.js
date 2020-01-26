const initialState = {
    b : 0,
    c : 1
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_B':
            return {
                ...state,
                b: state.b + action.value
            }
        case 'INCREMENT_C':
            return {
                ...state,
                c: state.c +2
            }
        default:
            return state
    }
}

export default reducer;