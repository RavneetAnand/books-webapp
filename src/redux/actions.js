import { getAllBooks, userLogin } from './service'
//#region Constants
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const GET_BOOKS_LIST = 'GET_BOOKS_LIST';
const GET_BOOKS_LIST_SUCCESS = 'GET_BOOKS_LIST_SUCCESS';
//#endregion Constants

/**
 * Dispatch action to authenticate a user login.
 * @param {*} username User-entered user name.
 * @param {*} password User-entered password.
 */
const login = (username, password) => async(dispatch) => {
    dispatch({ type: LOGIN });
    const response = await userLogin(username, password);
    const data = await response.json();
    if (data.accessToken) {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
}

/**
 * Dispatch action to fetch the books list.
 */
const getBooksList = () => async(dispatch) => {
    dispatch({ type: GET_BOOKS_LIST });
    const response = await getAllBooks();
    const data = await response.json();
    if(data) {
        dispatch({ type: GET_BOOKS_LIST_SUCCESS, data });
    }
};

export {
    GET_BOOKS_LIST,
    GET_BOOKS_LIST_SUCCESS,
    getBooksList,
    LOGIN_SUCCESS,
    login
}