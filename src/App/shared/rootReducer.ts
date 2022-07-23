import { createExchangeRatesReducer } from "ExchangeRates/shared";
import { combineReducers } from "redux";
import { createSearchBarReducer } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";
import searchParamsReducer from "./searchParamsReducer";

const rootReducer = combineReducers({
	searchParams: searchParamsReducer,
	[AppPrefixes.SEARCH_BAR]: createSearchBarReducer(AppPrefixes.SEARCH_BAR),
	[AppPrefixes.EXCHANGE_RATES]: createExchangeRatesReducer(
		AppPrefixes.EXCHANGE_RATES
	),
});

export default rootReducer;
