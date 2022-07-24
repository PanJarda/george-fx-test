import { applyMiddleware, createStore, StoreEnhancer } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { exchangeRateApis } from "ExchangeRates/shared";

const configuration = {
	baseUrl: "https://run.mocky.io/v3/",
};

const sagaMiddleware = createSagaMiddleware({
	context: {
		...exchangeRateApis(configuration),
	},
});

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
