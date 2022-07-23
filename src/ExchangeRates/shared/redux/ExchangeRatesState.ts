import { ApiState } from "CommonTech/public";
import { ExchangeRates } from "./ExchangeRates";
import { Query } from "./query";

export interface ExchangeRatesState {
	query: Query;
	exchangeRates: ApiState<ExchangeRates>;
}
