import { ApiError } from "./ApiError";
import { Action } from "redux";

export interface ApiErrorAction extends Action {
	error: ApiError;
}
