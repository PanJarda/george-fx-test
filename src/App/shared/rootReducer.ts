import { createExchangeRatesReducer } from "ExchangeRates/shared";
import { combineReducers } from "redux";
import { createSearchBarReducer } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";

const rootReducer = combineReducers({
	[AppPrefixes.SEARCH_BAR]: createSearchBarReducer(AppPrefixes.SEARCH_BAR),
	[AppPrefixes.EXCHANGE_RATES]: createExchangeRatesReducer(
		AppPrefixes.EXCHANGE_RATES
	),
});

export default rootReducer;
