const initialState = {
    classes: [],
    isFetching: false,
    error: "",
    edit: 0,
    editing: false
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
        case "SET_EDITTING":
            return{
                ...state,
                editing: true,
                edit: action.payload
            }
        case "CANCEL_EDIT":
            return{
                ...state,
                editing: false,
                edit: 0,
            }
        default: return state
    }
}

export default reducer;