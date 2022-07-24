import { ApiConfiguration } from "CommonTech/public";
import ExchangeRatesApi from "./ExchangeRatesApi";

export interface EchangeRateApis {
	exchangeRateApi: ExchangeRatesApi;
}

export const exchangeRateApis = (
	configuration: ApiConfiguration
): EchangeRateApis => ({
	exchangeRateApi: new ExchangeRatesApi(configuration),
});
