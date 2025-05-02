// Начальное состояние
export const INITIAL_STATE = {
	isValid: {
		title: true,
		post: true,
		date: true,
	},
	values: {
		title: '',
		post: '',
		date: '',
		tag:'',
	},
	isFormReadyToSubmit:false,
};

// Функция изменения состояния
export function formReducer(state, action) {
	switch(action.type) {
	case 'CLEAR': 
		return { ...state, values: INITIAL_STATE.values};
	case 'RESET_VALIDITY': 
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const titleValidity = action.payload.title?.trim().length;
		const postValidity = action.payload.post?.trim().length;
		const dateValidity = action.payload.date;
		return {
			values:action.payload,
			isValid: {
				title: titleValidity,
				post: postValidity,
				date: dateValidity,
			},
			isFormReadyToSubmit: titleValidity && postValidity && dateValidity,
		};
	}
	}
}