import { SearchBarAction } from "./SearchBarAction";
import { emptySearchBarState, SearchBarState } from "./SearchBarState";
import setQueryActionType from "./SetQueryActionType";

const createSearchBarReducer =
	(actionTypePrefix: string) =>
	(
		state: SearchBarState = emptySearchBarState,
		{ type, query }: SearchBarAction
	): SearchBarState =>
		type === setQueryActionType(actionTypePrefix)
			? { ...state, query }
			: state;

export default createSearchBarReducer;
