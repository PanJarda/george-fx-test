import setSearchParamsSaga from "./setSearchParamsSaga";
import AppPrefixes from "./AppPrefixes";
import { createSetQueryAction } from "ExchangeRates/shared";
import { expectSaga } from "redux-saga-test-plan";
import appModel from "./appModel";
import { select } from "redux-saga/effects";
import createSetSearchParamsAction from "./createSetSearchParamsAction";

const testQuery = "test";

describe("set search params saga", () => {
	it("should set url search params after search bar query change", () => {
		return expectSaga(setSearchParamsSaga)
			.provide([[select(appModel.selectSearchParams), ""]])
			.dispatch(createSetQueryAction(AppPrefixes.SEARCH_BAR)(testQuery))
			.put(createSetSearchParamsAction("q=" + testQuery))
			.put(createSetQueryAction(AppPrefixes.EXCHANGE_RATES)(testQuery))
			.silentRun();
	});
});
