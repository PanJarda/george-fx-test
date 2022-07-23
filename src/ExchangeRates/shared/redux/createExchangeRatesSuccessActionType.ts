import { ExchangeRatesSuccessActionType } from "./ExchangeRatesSuccessActionType";

const createExchangeRatesSuccessActionType = (
	appPrefix: string
): ExchangeRatesSuccessActionType => `${appPrefix}_EXCHANGE_RATES_SUCCESS`;

export default createExchangeRatesSuccessActionType;
