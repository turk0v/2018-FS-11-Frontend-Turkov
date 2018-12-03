import * as fakeData from './fakeData'

const initialStore = {
	chatsValues: [...fakeData.chats],
};
const reducer = (store = initialStore , action) => {
	return store;
};

export default reducer;