import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  user: null,
  products: null,
};

export const actionTypes = {
  ME: 'ME',
  POINTS: 'POINTS',
  HISTORY: 'HISTORY',
  PRODUCST: 'PRODUCST',
  REDEEM: 'REDEEM',
};

// export const actionTypes = {
//   TICK: 'TICK',
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT',
//   RESET: 'RESET',
// };

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ME:
      return { ...state, user: action.payload.user };
    case actionTypes.POINTS:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case actionTypes.HISTORY:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    case actionTypes.PRODUCST:
      return Object.assign({}, state, {
        count: initialState.count,
      });
    case actionTypes.REDEEM:
      return Object.assign({}, state, {
        count: initialState.count,
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = () => ({
  type: actionTypes.TICK,
  light: false,
  ts: Date.now(),
});
export const startClock = () => ({
  type: actionTypes.TICK,
  light: true,
  ts: Date.now(),
});

export const setUser = (user = { name: 'yzy a' }) => ({
  type: actionTypes.ME,
  payload: user,
});

export const incrementCount = () => ({ type: actionTypes.INCREMENT });

export const decrementCount = () => ({ type: actionTypes.DECREMENT });

export const resetCount = () => ({ type: actionTypes.RESET });

export function initializeStore(state) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
}
