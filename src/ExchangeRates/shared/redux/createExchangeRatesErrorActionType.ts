import { ExchangeRatesErrorActionType } from "./ExchangeRatesErrorActionType";

const createExchangeRatesErrorActionType = (
	appPrefix: string
): ExchangeRatesErrorActionType => `${appPrefix}_EXCHANGE_RATES_ERROR`;

export default createExchangeRatesErrorActionType;
