import { ApiError, ApiErrorAction } from "CommonTech/public";
import createExchangeRatesErrorActionType from "./createExchangeRatesErrorActionType";

const createExchangeRatesErrorAction =
	(appPrefix: string) =>
	(error: ApiError): ApiErrorAction => ({
		type: createExchangeRatesErrorActionType(appPrefix),
		error,
	});

export default createExchangeRatesErrorAction;
