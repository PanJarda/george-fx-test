import { createApiReducer } from "CommonTech/public";
import { createQueryReducer } from "./query";
import { combineReducers } from "redux";
import createExchangeRatesRequestActionType from "./createExchangeRatesRequestActionType";
import createExchangeRatesSuccessActionType from "./createExchangeRatesSuccessActionType";
import createExchangeRatesErrorActionType from "./createExchangeRatesErrorActionType";
import createExchangeRatesResetActionType from "./createExchangeRatesResetActionType";

const createExchangeRatesReducer = (appPrefix: string) =>
	combineReducers({
		query: createQueryReducer(appPrefix),
		exchangeRates: createApiReducer(
			createExchangeRatesRequestActionType(appPrefix),
			createExchangeRatesSuccessActionType(appPrefix),
			createExchangeRatesErrorActionType(appPrefix),
			createExchangeRatesResetActionType(appPrefix)
		),
	});

export default createExchangeRatesReducer;
