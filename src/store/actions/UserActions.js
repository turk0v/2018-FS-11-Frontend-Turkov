export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_OK = 'LOGIN_OK';

export function handleLogin(callback) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    // eslint-disable-next-line no-undef
    VK.Auth.login((r) => {
      if (r.session) {
        console.log(r.session);
        const username = r.session.user.first_name;
        localStorage.setItem('name', username);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        });
      }
    });
  };
}
export const authCheck = () => (dispatch) => {
  const name = localStorage.getItem('name');
  if (true) {
    dispatch({ type: LOGIN_OK });
  } else {
    console.log('Not logged in');
  }
};
