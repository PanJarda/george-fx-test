import { all, spawn } from "redux-saga/effects";
import { createSearchBarSagas } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";
import { createExchangeRatesSagas } from "ExchangeRates/shared";

const sagas = [
	...createSearchBarSagas(AppPrefixes.SEARCH_BAR),
	...createExchangeRatesSagas(AppPrefixes.EXCHANGE_RATES),
];

function* rootSaga() {
	yield all(sagas.map((saga) => spawn(saga)));
}

export default rootSaga;
