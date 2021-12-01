import { ActionTypes } from "../Action-Creators/ActionTypes";
const initialState = {
  courses: [],
};
export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALL_COURSES:
      return { ...state, courses: payload };

    case ActionTypes.ADD_COURSE:
      return { ...state, courses: [...state.courses, payload] };

    case ActionTypes.DELETE_COURSE:
      return { ...state, courses: payload };
    default:
      return state;
  }
};
