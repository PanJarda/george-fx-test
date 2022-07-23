import { SetSearchParamsAction } from "./SetSearchParamsAction";
import { AppActionTypes } from "./AppActionTypes";

const createSetSearchParamsAction = (
	params: string
): SetSearchParamsAction => ({
	type: AppActionTypes.SET_SEARCH_PARAMS,
	params,
});

export default createSetSearchParamsAction;
