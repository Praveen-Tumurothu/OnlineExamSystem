const init = {
  students: [],
};
const StudentReducer = (state = init, action) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return { ...state, students: [...action.payload] };
    default:
      return state;
  }
};

export default StudentReducer;
