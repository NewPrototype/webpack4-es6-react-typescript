

import { takeEvery, takeLatest } from 'redux-saga/effects';

export const callTakeEvery = function*(action:string, method:Function) {
  return yield takeEvery(action, function*(...arg) {
    try {
      return yield method(...arg);
    } catch (e) {
      console.log('callTakeEvery error: ', e && e.message);
      console.error(e);
    }
  });
};
export const callTakeLatest = function*(action:string, method:Function) {
  return yield takeLatest(action, function*(...arg) {
    try {
      return yield method(...arg);
    } catch (e) {
      console.log('callTakeLatest error: ', e && e.message);
      console.error(e);
    }
  });
};

export const dispatchFun = (dispatch:Function,type:string,params:{}) => {
  return new Promise(resolve =>
    dispatch({
      type,
      params,
      cb: (data: any) => {
        resolve(data)
      },
    }),
  )
}

export default {
  callTakeEvery,
  dispatchFun,
    callTakeLatest,
}
