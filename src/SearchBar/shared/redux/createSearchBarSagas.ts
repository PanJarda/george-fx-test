import { ForkEffect } from "redux-saga/effects";

const searchBarSagas: ((
	prefix: string
) => () => Generator<ForkEffect<never>>)[] = [];

const createSearchBarSagas = (
	appPrefix: string
): (() => Generator<ForkEffect<never>>)[] =>
	searchBarSagas.map((saga) => saga(appPrefix));

export default createSearchBarSagas;
