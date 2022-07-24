import { FX } from "./redux";

const filterByQuery =
	(query: string) =>
	({ currency, currencyName, countryName }: FX) =>
		!query ||
		currency.startsWith(query.toUpperCase()) ||
		currencyName?.toLowerCase().startsWith(query.toLowerCase()) ||
		countryName?.toLowerCase().startsWith(query.toLowerCase());

export default filterByQuery;
