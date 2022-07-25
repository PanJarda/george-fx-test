import createExchangeRatesErrorActionType from "./createExchangeRatesErrorActionType";

test("createExchangeRatesErrorActionType", () => {
	expect(createExchangeRatesErrorActionType("prefix")).toEqual(
		"prefix_EXCHANGE_RATES_ERROR"
	);
});
