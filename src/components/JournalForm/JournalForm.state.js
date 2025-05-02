export const INITIAL_STATE = {
	isValid: {
		title: true,
		post: true,
		date: true,
	},
	values: {
		title: undefined,
		post: undefined,
		date: undefined,
	},
	isFormReadyToSubmit:false,
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'RESET_VALIDITY': 
		return { ...state, isValid: INITIAL_STATE.isValid}
	}
}