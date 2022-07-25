import filterByQuery from "./filterByQuery";
import fxState from "./api/mocks/fxState.json";

test("should filter exchange rates by query", () => {
	expect(fxState.filter(filterByQuery("CZK"))).toStrictEqual([
		{
			currency: "CZK",
			exchangeRate: "25.93",
			currencyName: "Czech Koruna",
			countryName: "Czech Republic",
		},
	]);
});
