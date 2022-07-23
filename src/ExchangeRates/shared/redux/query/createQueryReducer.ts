import { AppPrefix } from "CommonTech/public";
import emptyQueryState from "./emptyQueryState";
import { Query } from "./Query";
import { SetQueryAction } from "./SetQueryAction";
import createSetQueryActionType from "./createSetQueryActionType";

const createQueryReducer =
	(appPrefix: AppPrefix) =>
	(state: Query = emptyQueryState, { type, query }: SetQueryAction): Query =>
		type === createSetQueryActionType(appPrefix) ? query : state;

export default createQueryReducer;
