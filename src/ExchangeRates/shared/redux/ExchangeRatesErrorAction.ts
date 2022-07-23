import { ApiError } from "CommonTech/public";
import { Action } from "redux";
import { ExchangeRatesErrorActionType } from "./ExchangeRatesErrorActionType";

export interface ExchangeRatesErrorAction
	extends Action<ExchangeRatesErrorActionType> {
	error: ApiError;
}
