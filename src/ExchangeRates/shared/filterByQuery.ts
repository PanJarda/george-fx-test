import { FX } from "./redux";

const filterByQuery =
	(query: string) =>
	({ currency, currencyName }: FX) =>
		!query ||
		currency.startsWith(query.toUpperCase()) ||
		currencyName?.toLowerCase().startsWith(query.toLowerCase());

export default filterByQuery;
