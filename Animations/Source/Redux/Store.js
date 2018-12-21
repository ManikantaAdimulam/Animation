import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./Reducers/Reducer";
import { HomeReducer } from "./Reducers/HomeReducer";
import { FlowersReducer } from "./Reducers/FlowersReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Sags/RootSaga";

const rootReducer = combineReducers({ reducer, HomeReducer, FlowersReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
