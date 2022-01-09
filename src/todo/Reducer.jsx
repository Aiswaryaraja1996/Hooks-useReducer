import { actionConstants } from "./Action";

export const initialState = {
  todos: [],
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_TODO_REQUEST:
      return { ...state, isLoading: true };
    case actionConstants.GET_TODO_SUCCESS:
      return { ...state, todos: action.payload.todos, isLoading: false };
    case actionConstants.GET_TODO_FAILURE:
      return { ...state, isError: true };
    case actionConstants.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
}
