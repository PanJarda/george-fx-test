import createExchangeRatesErrorAction from "./createExchangeRatesErrorAction";
import createExchangeRatesErrorActionType from "./createExchangeRatesErrorActionType";

test("createExchangeRatesErrorAction", () => {
	expect(
		createExchangeRatesErrorAction("prefix")({ code: 500 })
	).toStrictEqual({
		type: createExchangeRatesErrorActionType("prefix"),
		error: { code: 500 },
	});
});
