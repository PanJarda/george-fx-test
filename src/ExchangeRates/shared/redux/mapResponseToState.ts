import { ExchangeRatesData } from "../api";
import { FX } from "./FX";

const mapResponseToState = (response: ExchangeRatesData): FX[] =>
	response.fx
		?.filter((fx) => fx.exchangeRate)
		.map((fx) => ({
			currency: fx.currency,
			exchangeRate:
				fx.exchangeRate?.middle ??
				fx.exchangeRate?.buy ??
				fx.exchangeRate?.middle,
			currencyName: fx.nameI18N,
		}))
		.sort((a, b) =>
			a.currency < b.currency ? -1 : a.currency > b.currency ? 1 : 0
		);

export default mapResponseToState;
