import { ExchangeRatesRequestActionType } from "./ExchangeRatesRequestActionType";

const createExchangeRatesRequestActionType = (
	appPrefix: string
): ExchangeRatesRequestActionType => `${appPrefix}_EXCHANGE_RATES_REQUEST`;

export default createExchangeRatesRequestActionType;
