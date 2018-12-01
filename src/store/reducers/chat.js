import * as actionTypes from './../actions/actionTypes'
import * as fakeData from './fakeData'

const initialState = {
	chatsValues: [...fakeData.chats],
};
const reducer = (state = initialState , action) => {
	return state
}

export default reducer;