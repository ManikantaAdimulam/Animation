import { call, put, takeEvery } from "redux-saga/effects";
import { getDataSuccess } from "../Actions";
import axios from "axios";

/**
 * Movies Saga
 *
 */
function* movieSaga() {
  try {
    const data = yield call(getMovieData);
    yield put({ type: "GET_DATA_SUCCESS", data });
  } catch (error) {
    yield put({ type: "GET_DATA_FAILURE", error });
    // console.log(error, "error");
  }
}

/**
 * Getting movies from api.
 *
 * @returns JSon object.
 */
function getMovieData() {
  return axios({
    method: "get",
    url: "https://yts.am/api/v2/list_movies.json",
    timeout: 3000
  }).then(res => {
    return res;
  });
}
/**
 * Movies Watcher
 *
 * @export moviesWatcher
 */
export function* moviesWatcher() {
  yield takeEvery("GET_DATA", movieSaga);
}
