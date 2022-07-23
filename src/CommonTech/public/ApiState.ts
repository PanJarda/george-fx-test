import { ApiError } from "./ApiError";
import { ApiStatus } from "./ApiStatus";

export interface ApiSuccessState<T> {
	status: ApiStatus.SUCCESS;
	data: T;
}

export interface ApiErrorState {
	status: ApiStatus.ERROR;
	error: ApiError;
}

export interface ApiReadyState {
	status: ApiStatus.READY;
}

export interface ApiLoadingState {
	status: ApiStatus.LOADING;
}

export type ApiState<T> =
	| ApiReadyState
	| ApiLoadingState
	| ApiSuccessState<T>
	| ApiErrorState;
