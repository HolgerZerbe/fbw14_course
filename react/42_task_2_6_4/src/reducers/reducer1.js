const randomstring = require("randomstring"); 

const initialState = {
    a : null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GENERATE_RANDOMSTRING':
            return {
                ...state,
                a: randomstring.generate(10)
            }

        default:
            return state
    }
}

export default reducer;