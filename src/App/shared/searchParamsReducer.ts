import { SetSearchParamsAction } from "./SetSearchParamsAction";
import { SearchParamsState } from "./SetSearchParamsState";
import { AppActionTypes } from "./AppActionTypes";

const searchParamsReducer = (
	state: SearchParamsState = "",
	{ type, params }: SetSearchParamsAction
) => (type === AppActionTypes.SET_SEARCH_PARAMS ? params : state);

export default searchParamsReducer;
