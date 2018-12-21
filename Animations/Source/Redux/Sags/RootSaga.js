import { all } from "redux-saga/effects";
import { moviesWatcher } from "./MovieSaga";
import { flowersWatcher } from "./FlowerSaga";

export function* rootSaga() {
  yield all([moviesWatcher(), flowersWatcher()]);
}
