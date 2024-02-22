import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE}),
    decrease: () => dispatch({ type: actionTypes.DECREASE}),
    reset: () => dispatch({ type: actionTypes.RESET}),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload}),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREMENT_STAT});

  return await new Promise(r => {
    dispatch({ type: actionTypes.ASYNC_INCREMENT_END});
    setTimeout(() => {
      r('RESOLVED');
    }, 2000);
  });
}

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREMENT_STAT});

  return await new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.ASYNC_INCREMENT_ERROR});
    setTimeout(() => {
      reject(new Error('Deu Ruim!'));
    }, 2000);
  });
}