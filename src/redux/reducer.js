import { combineReducers } from "redux";
import { GET_BOOKS_LIST_SUCCESS, LOGIN_SUCCESS } from './actions';

//#region Users reducer
const user = JSON.parse(localStorage.getItem('user'));
const initialUserState = user? { isLoggedIn: true, user }: { isLoggedIn: false, user: null };

const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.accessToken,
      };
    default:
      return state;
  }
}
//#endregion Users reducer

//#region Books reducer
// Define an initial state value for the app
const initialState = {
  value: [],
  loading: true
};

const bookReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_LIST_SUCCESS:
      return {...state, value : action.data, loading: false}
    default:
      return state;
  }
};
//#endregion Books reducer

export default combineReducers({
  userReducer,
  bookReducer,
});