const initialState={
    enrollments:[],
}
const EnrollReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case "GET_ENROLLMENTS":
            return {...state,enrollments:[...action.payload]};
        case "DELETE_ENROLLMENT":
            return { ...state,enrollments:action.payload }
        default:
            return state;
    }
}
 
export default EnrollReducer;