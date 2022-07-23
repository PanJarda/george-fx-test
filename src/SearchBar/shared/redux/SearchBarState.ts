import { Query } from "./Query";

export const emptySearchBarState = {
	query: "",
};

export interface SearchBarState {
	query: Query;
}
