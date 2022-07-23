import { put, takeLatest } from "redux-saga/effects";
import createExchangeRatesRequestActionType from "./createExchangeRatesRequestActionType";
import createExchangeRatesSuccessAction from "./createExchangeRatesSuccessAction";
import { ExchangeRates } from "./ExchangeRates";
import createExchangeRatesErrorAction from "./createExchangeRatesErrorAction";

const sleep = (timeout: number) =>
	new Promise((resolve) => setTimeout(() => resolve(null), timeout));

const fxMock: ExchangeRates = {
	institute: 198,
	lastUpdated: new Date("2018-11-09T15:07:00Z"),
	comparisonDate: new Date("2018-11-09T12:45:00Z"),
	baseCurrency: "EUR",
	fx: [
		{
			currency: "FJD",
			precision: 2,
			nameI18N: "Fiji Dollar",
			exchangeRate: {
				buy: 2.0,
				middle: 2.25,
				sell: 2.5,
				indicator: 0,
				lastModified: new Date("2012-02-14T23:00:00Z"),
			},
			banknoteRate: {
				buy: 2.2,
				middle: 2.4,
				sell: 2.6,
				indicator: 0,
				lastModified: new Date("2018-11-06T23:00:00Z"),
			},
			flags: ["provided"],
		},
	],
};

const createFetchExchangeRates = (appPrefix: string) => {
	return function* fetchExchangeRates() {
		try {
			yield sleep(3000);
			yield put(createExchangeRatesSuccessAction(appPrefix)(fxMock));
		} catch {
			yield put(createExchangeRatesErrorAction(appPrefix)({ code: 500 }));
		}
	};
};

const createLoadExchangeRatesSaga = (appPrefix: string) => {
	const requestActionType = createExchangeRatesRequestActionType(appPrefix);
	const fetchExchangeRates = createFetchExchangeRates(appPrefix);
	return function* layersSaga() {
		yield takeLatest(requestActionType, fetchExchangeRates);
	};
};

export default createLoadExchangeRatesSaga;
