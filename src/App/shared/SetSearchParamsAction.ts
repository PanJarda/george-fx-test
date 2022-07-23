import { Action } from "redux";
import { AppActionTypes } from "./AppActionTypes";

export interface SetSearchParamsAction
	extends Action<AppActionTypes.SET_SEARCH_PARAMS> {
	params: string;
}
