import { ApiState } from "CommonTech/public";
import { FX } from "./FX";
import { Query } from "./query";

export interface ExchangeRatesState {
	query: Query;
	exchangeRates: ApiState<FX[]>;
}
