export const onLoadChatNames = () => {
  return dispatch => {
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      body: JSON.stringify({
        'jsonrpc': '2.0',
        'method': 'get_chats_request',
        'id': 0
      })
    })
    .then((response) => {
      response.json()
        .then((value) => {
          // console.log(response)
          console.log(value);
        })
    })
  }
}