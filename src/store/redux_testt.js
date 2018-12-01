const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  counter: 0,
};
// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_VALUE') {
    return {
      counter: state.counter + action.value,
    };
  }
  return state;
};
// store
const store = createStore(rootReducer);
console.log(store.getState());
//subscription
store.subscribe(() => {
	console.log('[Subscription] new state ', store.getState())
});
// dispatch
store.dispatch({
  type: 'INC',
});
store.dispatch({
  type: 'ADD_VALUE',
  value: 5,
});
