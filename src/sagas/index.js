import { fork, call, put, take, delay } from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODES } from "../constants";

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODES.SUCCESS) {
    // dispatch action fetchListTaskSuccess
  } else {
    // dispatch action fetchListTaskFailed
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
}

export default rootSaga;
