import { SetQueryAction } from "./SetQueryAction";
import createSetQueryActionType from "./createSetQueryActionType";
import { AppPrefix } from "CommonTech/public";
import { Query } from "./Query";

const createSetQueryAction =
	(appPrefix: AppPrefix) =>
	(query: Query): SetQueryAction => ({
		type: createSetQueryActionType(appPrefix),
		query,
	});

export default createSetQueryAction;
