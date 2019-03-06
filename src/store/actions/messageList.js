export const CHATS_GET_MESSAGES = 'CHATS_GET_MESSAGES';

export const onLoadMessagesForChat = () => (dispatch) => {
  	const messagesForChat = [];
  	const i = 0;
  	dispatch(onMessagesForChatLoaded(messagesForChat));
};
export const onMessagesForChatLoaded = messagesForChat => ({
  type: CHATS_GET_MESSAGES,
  payload: {
    messagesForChat,
  },
});
