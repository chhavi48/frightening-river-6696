import { PROJECT_ERROR, PROJECT_REQUEST, PROJECT_SUCCESS } from "./app.types";

const intitialState = {
	product: [],
	isError: false,
	isLoading: false,
};
function appreducer(state = intitialState, { type, payload }) {
	// console.log("Payload", payload);
	switch (type) {
		case PROJECT_REQUEST: {
			return { ...state, isLoading: true, isError: false };
		}
		case PROJECT_SUCCESS: {
			return { ...state, isLoading: false, isError: false, product: payload };
		}
		case PROJECT_ERROR: {
			return { ...state, isLoading: false, isError: true };
		}
		default:
			return state;
	}
}
export default appreducer;
