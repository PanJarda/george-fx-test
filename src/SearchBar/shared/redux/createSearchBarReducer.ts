import { SearchBarAction } from "./SearchBarAction";
import { emptySearchBarState, SearchBarState } from "./SearchBarState";
import createSetQueryActionType from "./createSetQueryActionType";

const createSearchBarReducer =
	(actionTypePrefix: string) =>
	(
		state: SearchBarState = emptySearchBarState,
		{ type, query }: SearchBarAction
	): SearchBarState =>
		type === createSetQueryActionType(actionTypePrefix)
			? { ...state, query }
			: state;

export default createSearchBarReducer;
