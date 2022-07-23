import { SearchBarStateSlice } from "./SearchBarStateSlice";
import { Query } from "./Query";

const selectQuery =
	(appPrefix: string) =>
	(state: SearchBarStateSlice): Query =>
		state[appPrefix].query;

export default selectQuery;
