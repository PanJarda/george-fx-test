import { SearchParamsStateSlice } from "./SearchParamsStateSlice";
import { Dispatch } from "redux";
import { createSetQueryAction } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";
import { AppState } from "./AppState";
import { ApiStatus } from "CommonTech/public";
import { IAppModel } from "./IAppModel";

const appModel: IAppModel = {
	setSearchParams: (dispatch: Dispatch, params: string) => {
		const searchParams = new URLSearchParams(params);
		const query = searchParams.get("q") || "";
		dispatch(createSetQueryAction(AppPrefixes.SEARCH_BAR)(query));
	},
	selectSearchParams: ({ searchParams }: SearchParamsStateSlice) =>
		searchParams,
	selectIsLoading: (state: AppState) =>
		state[AppPrefixes.EXCHANGE_RATES].exchangeRates.status ===
		ApiStatus.LOADING,
};

export default appModel;
