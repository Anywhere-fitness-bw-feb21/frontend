const initialState = {
    classes: [],
    isFetching: false,
    error: ""
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "API_START":
            return{
                ...state,
                isFetching: true
            }
        case "API_BAD":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case "API_GOOD":
            return{
                ...state,
                isFetching: false
            }
        case "SET_CLASSES":
            return{
                ...state,
                classes: action.payload
            }
        default: return state
    }
}

export default reducer;