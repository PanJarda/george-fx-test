import { Effect, put, select, takeLatest } from "redux-saga/effects";
import AppPrefixes from "./AppPrefixes";
import { createSetQueryActionType, SetQueryAction } from "SearchBar/shared";
import { createSetQueryAction } from "ExchangeRates/shared";
import createSetSearchParamsAction from "./createSetSearchParamsAction";
import appModel from "./appModel";

function* setSearchParams({ query }: SetQueryAction): Generator<Effect, void> {
	const searchParams = (yield select(appModel.selectSearchParams)) as string;
	const params = new URLSearchParams(searchParams);
	if (query) {
		params.set("q", query);
	} else {
		params.delete("q");
	}
	yield put(createSetSearchParamsAction(params.toString()));
	yield put(createSetQueryAction(AppPrefixes.EXCHANGE_RATES)(query));
}

function* setSearchParamsSaga(): Generator<Effect, void> {
	yield takeLatest(
		createSetQueryActionType(AppPrefixes.SEARCH_BAR),
		setSearchParams
	);
}

export default setSearchParamsSaga;
