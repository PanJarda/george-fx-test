import { ApiError } from "CommonTech/public";
import { ExchangeRatesErrorAction } from "./ExchangeRatesErrorAction";
import createExchangeRatesErrorActionType from "./createExchangeRatesErrorActionType";

const createExchangeRatesErrorAction =
	(appPrefix: string) =>
	(error: ApiError): ExchangeRatesErrorAction => ({
		type: createExchangeRatesErrorActionType(appPrefix),
		error,
	});

export default createExchangeRatesErrorAction;
