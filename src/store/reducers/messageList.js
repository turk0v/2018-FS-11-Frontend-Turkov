import * as fakeData from './fakeData.js'
import {CHATS_GET_MESSAGES} from './../actions/messageList.js'
import updateObject from './../utility.js'

const initialStore = {
	messageToChat:{},

};

const reducer = (store=initialStore , action) => {
	  switch (action.type) {
    case CHATS_GET_MESSAGES: {
      return updateObject(store, {
        messageToChat: action.payload.messagesForChat,
      });
    }
    default:
      return store;
  }
}

export default reducer;