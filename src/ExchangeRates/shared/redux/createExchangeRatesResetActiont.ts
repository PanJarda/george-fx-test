import createExchangeRatesResetActionType from "./createExchangeRatesResetActionType";
import { ExchangeRatesResetAction } from "./ExchangeRatesResetAction";

const createExchangeRatesResetAction =
	(appPrefix: string) => (): ExchangeRatesResetAction => ({
		type: createExchangeRatesResetActionType(appPrefix),
	});

export default createExchangeRatesResetAction;
