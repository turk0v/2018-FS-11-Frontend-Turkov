export const CHATS_LIST_LOADED = 'CHATS_LIST_LOADED';

export const onLoadChatNames = () => (dispatch) => {
  fetch('http://127.0.0.1:8000/', {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'get_chats_request',
      headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/',
      },
      id: 0,
    }),
  })
    .then((response) => {
      response.json()
        .then((value) => {
          let i = 0;
          const chatNames = [];
          while (value[i]) {
            chatNames.push({
              id: value[i].chat_id, name: value[i].name, key: value[i].key, unread: value[i].unread,
            });
            i++;
          }
          console.log('chatNames from action ' + chatNames);
          dispatch(onChatsListLoaded(chatNames));
        });
    });
};
export const onChatsListLoaded = chatNames => ({
  type: CHATS_LIST_LOADED,
  payload: {
    chatNames,
  },
});
