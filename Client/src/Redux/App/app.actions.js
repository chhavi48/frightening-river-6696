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

export const getEditProject = (id, payload) => async (dispatch) => {
	return await axios.patch(`${baseURL}/project/edit/${id}`, payload);
};

export const getdeleteProject = (id) => async (dispatch) => {
	return await axios.delete(`${baseURL}/project/delete/${id}`);
};

export const getCreateProject = (payload) =>async (dispatch)=> {
	return await axios.post(`${baseURL}/project/create`, payload);
}

export const getClientsRequest = () => (dispatch) => {
	dispatch({ type: PROJECT_REQUEST });
	axios
		.get(`${baseURL}/client`)
		.then((res) => {
			// console.log(res.data);
			dispatch({ type: PROJECT_SUCCESS, payload: res.data });
		})
		.catch((e) => {
			dispatch({ type: PROJECT_ERROR });
		});
};