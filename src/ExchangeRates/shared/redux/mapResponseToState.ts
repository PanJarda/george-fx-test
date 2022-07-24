import { ExchangeRatesData } from "../api";
import { FX } from "./FX";
import currencyCodesToISOStateCodes from "../assets/currencyCodesToISOStateCodes.json";
import { CurrencyCodeToISOTable } from "../CurrencyCodeToISOTable";

const mapResponseToState = (response: ExchangeRatesData): FX[] =>
	response.fx
		?.filter((fx) => fx.exchangeRate)
		.map((fx) => ({
			currency: fx.currency,
			exchangeRate: (
				fx.exchangeRate?.middle ??
				fx.exchangeRate?.buy ??
				fx.exchangeRate?.sell
			)?.toFixed(typeof fx.precision !== "undefined" ? fx.precision : 2),
			currencyName: fx.nameI18N,
			countryName: (
				currencyCodesToISOStateCodes as CurrencyCodeToISOTable
			)[fx.currency]?.Country,
		}))
		.sort((a, b) =>
			a.currency < b.currency ? -1 : a.currency > b.currency ? 1 : 0
		);

export default mapResponseToState;
