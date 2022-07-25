import { SearchBarAction } from "./SearchBarAction";
import { emptySearchBarState, SearchBarState } from "./SearchBarState";
import createSetQueryActionType from "./createSetQueryActionType";

const createSearchBarReducer =
	(appPrefix: string) =>
	(
		state: SearchBarState = emptySearchBarState,
		{ type, query }: SearchBarAction
	): SearchBarState =>
		type === createSetQueryActionType(appPrefix)
			? { ...state, query }
			: state;

export default createSearchBarReducer;
