import { Action } from "redux";
import { ApiError } from "./ApiError";

export interface ApiAction<TData> extends Action {
	data?: TData;
	error?: ApiError;
}
