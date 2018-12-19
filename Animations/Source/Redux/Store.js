import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./Reducer";
import { HomeReducer } from "./HomeReducer";
import { FlowersReducer } from "./FlowersReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./RootSaga";

const rootReducer = combineReducers({ reducer, HomeReducer, FlowersReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
