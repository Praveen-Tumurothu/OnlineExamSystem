const initialState = {
  exams: [],
  exam: {},
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXAMS":
      return { ...state, exams: [...action.payload] };

    default:
      return state;
  }
};

export default examReducer;
