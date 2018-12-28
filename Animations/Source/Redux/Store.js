import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./Reducers/Reducer";
import { HomeReducer } from "./Reducers/HomeReducer";
import { FlowersReducer } from "./Reducers/FlowersReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Sags/RootSaga";
/**
 * Combining all reducers
 */
const rootReducer = combineReducers({ reducer, HomeReducer, FlowersReducer });
/**
 * Creating saga middleware
 */
const sagaMiddleware = createSagaMiddleware();
/**
 * Creating store
 */
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
/**
 * Running saga middleware
 */
sagaMiddleware.run(rootSaga);

export default store;
