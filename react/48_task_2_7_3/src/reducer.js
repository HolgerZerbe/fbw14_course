const initialState = {
    comments : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_COMMENTS': 
        return {comments: action.value}

        case 'DELETE_COMMENT':
        return {comments: action.value}

        case 'POST_COMMENT':
        return {comments: action.value}

        default: 
            return state;
    }
}

export default reducer;