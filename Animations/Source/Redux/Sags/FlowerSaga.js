import { call, put } from "redux-saga/effects";
import axios from "axios";

/**
 * Flower request watcher.
 *
 * @export flowersWatcher
 */
export function* flowersWatcher() {
  try {
    const data = yield call(getFlowers);
    yield put({ type: "GET_FLOWERS_SUCCESS", data });
  } catch (error) {
    yield put({ type: "GET_FLOWERS_FAILURE", error });
  }
}
/**
 * Get flowers from api
 *
 * @returns JSon object
 */
function getFlowers() {
  return axios({
    url: "https://www.googleapis.com/books/v1/volumes?q=flowers",
    method: "get",
    timeout: 3000
  })
    .then(response => {
      // console.log(response);
      return response.data.items;
    })
    .catch(error => {
      console.log("error", error);
    });
}
