/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from "./ApiError";
import { Action } from "redux";
import { call, put } from "redux-saga/effects";

const PARSING_ERROR: ApiError = { code: 1, msg: "Error parsing response" };

function safeSaga(
	func: (args: any) => any,
	createAction: <T>(error: ApiError) => Action<T>
) {
	//eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return function* (args: unknown): Generator {
		try {
			yield* func(args);
		} catch (error: any) {
			let body;
			try {
				const errorClone = error.clone();
				body = errorClone.json
					? ((yield call([errorClone, errorClone.json])) as ApiError)
					: PARSING_ERROR;
				yield put(createAction(body));
			} catch (e) {
				yield put(createAction(PARSING_ERROR));
			}
		}
	};
}

export default safeSaga;
