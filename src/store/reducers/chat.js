import * as fakeData from './fakeData'
import updateObject from './../utility.js'
import {CHATS_LIST_LOADED} from './../actions/chatsList.js'

const initialStore = {
	chatsValues: [...fakeData.chats],
	needToUpdate: true,
};
const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case CHATS_LIST_LOADED: {
    	console.log(action.payload)
      return updateObject(store, {
        needToUpdate: false,
        chatsValues: action.payload.chatNames,
      });
    }
    default:
      return store;
  }
};

export default reducer;