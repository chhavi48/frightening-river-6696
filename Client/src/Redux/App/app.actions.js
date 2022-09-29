import axios from "axios";
import { PROJECT_ERROR, PROJECT_REQUEST, PROJECT_SUCCESS } from "./app.types";

const baseURL = "http://localhost:8080";

export const getProjectRequest = () => (dispatch) => {
	dispatch({ type: PROJECT_REQUEST });
	axios
		.get(`${baseURL}/project`)
		.then((res) => {
			// console.log(res.data);
			dispatch({ type: PROJECT_SUCCESS, payload: res.data });
		})
		.catch((e) => {
			dispatch({ type: PROJECT_ERROR });
		});
};
