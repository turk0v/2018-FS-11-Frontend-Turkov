import * as fakeData from './fakeData'

const initialStore = {
	chatsValues: [...fakeData.chats],
};
const reducer = (store = initialStore , action) => {
	if(action.type = 'ENTER'){ 
		console.log(action.type)
		return store
}
	return store;
};

export default reducer;