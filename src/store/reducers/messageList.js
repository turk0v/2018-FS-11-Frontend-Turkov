import * as fakeData from './fakeData.js'

const initialStore = {
	messages : [...fakeData.messages],
};

const reducer = (state=initialStore , action) => {
	return state
}

export default reducer;