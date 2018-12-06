export const CHATS_GET_MESSAGES = 'CHATS_GET_MESSAGES'

export const onLoadMessagesForChat = () => {
  return dispatch => {
  	let messagesForChat = [];
  	let i = 0;
  	dispatch(onMessagesForChatLoaded(messagesForChat))
  }
}
  export const onMessagesForChatLoaded = (messagesForChat) => {
    return {
      type: CHATS_GET_MESSAGES,
      payload: {
        messagesForChat
      }
    }
  };