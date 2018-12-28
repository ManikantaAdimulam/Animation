import { all } from "redux-saga/effects";
import { moviesWatcher } from "./MovieSaga";
import { flowersWatcher } from "./FlowerSaga";

/**
 * Combines all saga files
 *
 * @export rootSaga
 */
export function* rootSaga() {
  yield all([moviesWatcher(), flowersWatcher()]);
}
