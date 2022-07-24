import { call, Effect, getContext, put, takeLatest } from "redux-saga/effects";
import createExchangeRatesRequestActionType from "./createExchangeRatesRequestActionType";
import createExchangeRatesSuccessAction from "./createExchangeRatesSuccessAction";
import createExchangeRatesErrorAction from "./createExchangeRatesErrorAction";
import { safeSaga } from "CommonTech/public";
import { ExchangeRatesData, ExchangeRatesApi } from "../api";
import mapResponseToState from "./mapResponseToState";

const createFetchExchangeRates = (appPrefix: string) => {
	return function* fetchExchangeRates(): Generator<
		Effect,
		void,
		ExchangeRatesApi | ExchangeRatesData
	> {
		const exchangeRateApi = (yield getContext(
			"exchangeRateApi"
		)) as ExchangeRatesApi;

		const exchangeRates = (yield call([
			exchangeRateApi,
			exchangeRateApi.fetchExchangeRates,
		])) as ExchangeRatesData;

		yield put(
			createExchangeRatesSuccessAction(appPrefix)(
				mapResponseToState(exchangeRates)
			)
		);
	};
};

const createLoadExchangeRatesSaga = (appPrefix: string) => {
	const requestActionType = createExchangeRatesRequestActionType(appPrefix);
	const fetchExchangeRates = createFetchExchangeRates(appPrefix);
	return function* layersSaga() {
		yield takeLatest(
			requestActionType,
			safeSaga(
				fetchExchangeRates,
				createExchangeRatesErrorAction(appPrefix)
			)
		);
	};
};

export default createLoadExchangeRatesSaga;
