import axios from "axios";
import {
	LOGIN_ERROR,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./auth.types";
const baseURL = "http://localhost:8080";

export const signupRequest =
	({ email, password }) =>
	async (dispatch) => {
		const payload = { email, password };
		return await axios.post(`${baseURL}/user/signup`, payload);
	};

export const loginAPI =
	({ email, password }) =>
	async (dispatch) => {
		dispatch({ type: LOGIN_LOADING });
		return await axios
			.post(`${baseURL}/user/login`, {
				email: email,
				password: password,
			})
			.then((r) => {
				// console.log(r.data)
				dispatch({ type: LOGIN_SUCCESS, payload: r.data });
			})
			.catch(() => {
				dispatch({ type: LOGIN_ERROR });
			});
	};
export const loginoutAPI = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
