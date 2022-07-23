import { ForkEffect } from "redux-saga/effects";
import createLoadExchangeRatesSaga from "./createLoadExchangeRatesSaga";

const exchangeRatesSagas: ((
	appPrefix: string
) => () => Generator<ForkEffect<never>>)[] = [createLoadExchangeRatesSaga];

const createExchangeRatesSagas = (
	appPrefix: string
): (() => Generator<ForkEffect<never>>)[] =>
	exchangeRatesSagas.map((saga) => saga(appPrefix));

export default createExchangeRatesSagas;
