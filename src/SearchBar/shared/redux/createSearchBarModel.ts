import { Dispatch } from "redux";
import createSetQueryAction from "./createSetQueryAction";
import { SearchBarModel } from "./SearchBarModel";
import selectQuery from "./selectQuery";

const createSearchBarModel = (appPrefix: string): SearchBarModel => {
	const setQueryAction = createSetQueryAction(appPrefix);
	return {
		setQuery: (dispatch: Dispatch, query: string) =>
			dispatch(setQueryAction(query)),
		selectQuery: selectQuery(appPrefix),
	};
};

export default createSearchBarModel;
