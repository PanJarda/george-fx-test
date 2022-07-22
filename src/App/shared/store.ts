import { applyMiddleware, createStore, StoreEnhancer } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const enhancer =
	process.env.MODE !== "production"
		? composeWithDevToolsDevelopmentOnly
		: (x: StoreEnhancer) => x;

const store = createStore(
	rootReducer,
	enhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
