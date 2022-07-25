import { Dispatch } from "redux";
import { SearchParamsStateSlice } from "./SearchParamsStateSlice";
import { AppState } from "./AppState";

export interface IAppModel {
	setSearchParams: (dispatch: Dispatch, params: string) => void;
	selectSearchParams: (state: SearchParamsStateSlice) => string;
	selectIsLoading: (state: AppState) => boolean;
}
