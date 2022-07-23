import { SearchParamsStateSlice } from "./SearchParamsStateSlice";
import { Dispatch } from "redux";
import { createSetQueryAction } from "SearchBar/shared";
import AppPrefixes from "./AppPrefixes";

const appModel = {
	setSearchParams: (dispatch: Dispatch, params: string) => {
		const searchParams = new URLSearchParams(params);
		const query = searchParams.get("q") || "";
		dispatch(createSetQueryAction(AppPrefixes.SEARCH_BAR)(query));
	},
	selectSearchParams: ({ searchParams }: SearchParamsStateSlice) =>
		searchParams,
};

export default appModel;
