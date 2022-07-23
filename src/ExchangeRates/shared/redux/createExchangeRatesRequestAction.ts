import createExchangeRatesRequestActionType from "./createExchangeRatesRequestActionType";
import { ExchangeRatesRequestAction } from "./ExchangeRatesRequestAction";

const createExchangeRatesRequestAction =
	(appPrefix: string) => (): ExchangeRatesRequestAction => ({
		type: createExchangeRatesRequestActionType(appPrefix),
	});

export default createExchangeRatesRequestAction;
