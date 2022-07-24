import createExchangeRatesSuccessActionType from "./createExchangeRatesSuccessActionType";
import { ExchangeRatesSuccessAction } from "./ExchangeRatesSuccessAction";
import { FX } from "./FX";

const createExchangeRatesSuccessAction =
	(appPrefix: string) =>
	(data: FX[]): ExchangeRatesSuccessAction => ({
		type: createExchangeRatesSuccessActionType(appPrefix),
		data,
	});

export default createExchangeRatesSuccessAction;
