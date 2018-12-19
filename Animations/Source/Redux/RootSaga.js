import { all } from "redux-saga/effects";
import { movieSaga } from "./MovieSaga";
import { flowersWatcher } from "./FlowerSaga";

export function* rootSaga() {
  yield all([movieSaga(), flowersWatcher()]);
}
