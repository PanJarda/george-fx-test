import { ExchangeRatesData } from "../api";
import { FX } from "./FX";
import currencyCodesToISOStateCodes from "../assets/currencyCodesToISOStateCodes.json";
import { CurrencyCodeToISOTable } from "../CurrencyCodeToISOTable";

const mapResponseToState = (response: ExchangeRatesData): FX[] =>
	response.fx
		?.filter((fx) => fx.exchangeRate)
		.map(
			({
				currency,
				exchangeRate: rate,
				nameI18N: currencyName,
				precision,
			}) => {
				const exchangeRate = (
					rate?.middle ??
					rate?.buy ??
					rate?.sell
				)?.toFixed(typeof precision !== "undefined" ? precision : 2);

				const countryName = (
					currencyCodesToISOStateCodes as CurrencyCodeToISOTable
				)[currency]?.Country;

				return {
					currency,
					...(exchangeRate ? { exchangeRate } : {}),
					...(currencyName ? { currencyName } : {}),
					...(countryName ? { countryName } : {}),
				};
			}
		)
		.sort(({ currencyName: a }, { currencyName: b }) =>
			a && b ? (a < b ? -1 : a > b ? 1 : 0) : 0
		);

export default mapResponseToState;
