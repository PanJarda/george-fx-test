import { ApiState } from "CommonTech/public";
import { Dispatch } from "redux";
import { ExchangeRatesStateSlice, FX } from "./redux";

export interface ExchangeRatesModel {
	fetchExchangeRates: (dispatch: Dispatch) => void;
	resetExchangeRates: (dispatch: Dispatch) => void;
	selectExchangeRates: (state: ExchangeRatesStateSlice) => ApiState<FX[]>;
	selectQuery: (state: ExchangeRatesStateSlice) => string;
}
