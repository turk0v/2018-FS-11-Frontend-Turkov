import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_OK,
} from './../actions/UserActions.js'
import updateObject from './../utility.js'
const initialState = {
  name:'',
	error: '',
	isAuthorized:'',
};

export function userReducer(store = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return updateObject(store,{
        isAuthorized:true,
      })

    case LOGIN_SUCCESS:
      return updateObject(store,{
        isAuthorized:true,
        name:action.payload
    })

    case LOGIN_OK:
      return updateObject(store,{
        isAuthorized:true,
        name:action.payload
    })

    case LOGIN_FAIL:
      return updateObject(store,{
        isAuthorized:false,
        error:action.payload.message
      })

    default:
      return store
  }
}

export default userReducer;