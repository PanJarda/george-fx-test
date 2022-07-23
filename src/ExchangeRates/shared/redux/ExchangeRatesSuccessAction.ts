import { ExchangeRatesSuccessActionType } from "./ExchangeRatesSuccessActionType";
import { Action } from "redux";
import { ExchangeRates } from "./ExchangeRates";

export interface ExchangeRatesSuccessAction
	extends Action<ExchangeRatesSuccessActionType> {
	data: ExchangeRates;
}
