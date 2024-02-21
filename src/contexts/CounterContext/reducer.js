import { initialState } from '.'; 
import * as actionTypes from './actions-types';

export const reducer = (state, action) => {

  switch (actionTypes.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1};

    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1};

    case actionTypes.RESET:
      return { ...initialState};

    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload};

    case actionTypes.ASYNC_INCREMENT_STAT:
      return { ...state, loading: true};

    case actionTypes.ASYNC_INCREMENT_END:
      return { ...state, loading: false, counter: state.counter + 1};

    case actionTypes.ASYNC_INCREMENT_ERROR:
      return { ...state, loading: false };
  }

  return state;
}