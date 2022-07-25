import {
	createExchangeRatesRequestAction,
	createExchangeRatesResetAction,
	ExchangeRatesStateSlice,
} from "./redux";
import { Dispatch } from "redux";
import { ExchangeRatesModel } from "./ExchangeRatesModel";

const createExchangeRatesModel = (appPrefix: string): ExchangeRatesModel => {
	const createRequestAction = createExchangeRatesRequestAction(appPrefix);
	const createResetAction = createExchangeRatesResetAction(appPrefix);
	return {
		fetchExchangeRates: (dispatch: Dispatch) =>
			dispatch(createRequestAction()),
		resetExchangeRates: (dispatch: Dispatch) =>
			dispatch(createResetAction()),
		selectExchangeRates: (state: ExchangeRatesStateSlice) =>
			state[appPrefix].exchangeRates,
		selectQuery: (state: ExchangeRatesStateSlice) => state[appPrefix].query,
	};
};

export default createExchangeRatesModel;
