import { Dispatch } from "redux";
import { SearchBarStateSlice } from "./SearchBarStateSlice";

export interface SearchBarModel {
	setQuery: (dispatch: Dispatch, query: string) => void;
	selectQuery: (state: SearchBarStateSlice) => string;
}
