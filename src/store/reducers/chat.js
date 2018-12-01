import * as fakeData from './fakeData'

const initialStore = {
	chatsValues: [...fakeData.chats],
};
const reducer = (store = initialStore , action) => {
	if(action.type = 'ENTER'){ 
		return store
}
	return store;
};

export default reducer;