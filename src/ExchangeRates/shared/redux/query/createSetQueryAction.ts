import { SetQueryAction } from "./SetQueryAction";
import createSetQueryActionType from "./createSetQueryActionType";
import { Query } from "./Query";

const createSetQueryAction =
	(appPrefix: string) =>
	(query: Query): SetQueryAction => ({
		type: createSetQueryActionType(appPrefix),
		query,
	});

export default createSetQueryAction;
