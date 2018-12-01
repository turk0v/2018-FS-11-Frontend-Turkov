import * as fakeData from './fakeData.js'
import * as actionTypes from './../actions/actionTypes.js'

const initialStore = {
	messages : [...fakeData.messages],
};

const reducer = (state=initialStore , action) => {
	return state
}

export default reducer;