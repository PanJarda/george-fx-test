import { ExchangeRatesResetActionType } from "./ExchangeRatesResetActionType";

const createExchangeRatesResetActionType = (
	appPrefix: string
): ExchangeRatesResetActionType => `${appPrefix}_EXCHANGE_RATES_RESET`;

export default createExchangeRatesResetActionType;
