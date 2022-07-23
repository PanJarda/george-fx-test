import { SearchParamsState } from "./SetSearchParamsState";
import { SearchBarState } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";
import { ExchangeRatesState } from "ExchangeRates/shared";

export interface AppState {
	searchParams: SearchParamsState;
	[AppPrefixes.SEARCH_BAR]: SearchBarState;
	[AppPrefixes.EXCHANGE_RATES]: ExchangeRatesState;
}
