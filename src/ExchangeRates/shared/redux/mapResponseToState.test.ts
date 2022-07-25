import mapResponseToState from "./mapResponseToState";
import fx from "../api/mocks/fx.json";
import fxState from "../api/mocks/fxState.json";
import { ExchangeRatesData } from "../api";

test("maps exchange rates response to redux store state", () => {
	expect(mapResponseToState(fx as ExchangeRatesData)).toStrictEqual(fxState);
});
