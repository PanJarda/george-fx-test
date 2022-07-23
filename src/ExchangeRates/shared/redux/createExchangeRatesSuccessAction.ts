import { ExchangeRates } from "./ExchangeRates";
import createExchangeRatesSuccessActionType from "./createExchangeRatesSuccessActionType";
import { ExchangeRatesSuccessAction } from "./ExchangeRatesSuccessAction";

const createExchangeRatesSuccessAction =
	(appPrefix: string) =>
	(data: ExchangeRates): ExchangeRatesSuccessAction => ({
		type: createExchangeRatesSuccessActionType(appPrefix),
		data,
	});

export default createExchangeRatesSuccessAction;
