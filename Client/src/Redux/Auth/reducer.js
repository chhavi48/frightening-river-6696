import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT
  } from "./auth.types";
  
  let token = localStorage.getItem("token");
  
  const intitialState = {
    loading: false,
    error: false,
    isAuth: !!token,
    token: token
  };
  
  function authreducer(state = intitialState, { type, payload }) {
    switch (type) {
      case LOGIN_LOADING:
        return { ...state, loading: true, error: false };
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: true,
          token: payload.token
        };
      case LOGIN_ERROR: {
        return { ...state, loading: false, error: true, isAuth: false };
      }
      case LOGOUT: {
        localStorage.removeItem("token");
        return { ...state, isAuth: false };
      }
      default:
        return state;
    }
  }
  
  export default authreducer;