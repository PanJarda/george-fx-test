import { ExchangeRatesSuccessActionType } from "./ExchangeRatesSuccessActionType";
import { Action } from "redux";
import { FX } from "./FX";

export interface ExchangeRatesSuccessAction
	extends Action<ExchangeRatesSuccessActionType> {
	data: FX[];
}
