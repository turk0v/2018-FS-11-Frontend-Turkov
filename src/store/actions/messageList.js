export const CHATS_GET_MESSAGES = 'CHATS_GET_MESSAGES';

export const onLoadMessagesForChat = () => (dispatch) => {
  	const messagesForChat = [];
  	dispatch(onMessagesForChatLoaded(messagesForChat));
};
export const onMessagesForChatLoaded = messagesForChat => ({
  type: CHATS_GET_MESSAGES,
  payload: {
    messagesForChat,
  },
});
