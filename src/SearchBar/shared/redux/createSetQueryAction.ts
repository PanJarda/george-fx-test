import setQueryActionType, { SetQueryActionType } from "./SetQueryActionType";
import { Action } from "redux";

export interface SetQueryAction extends Action<SetQueryActionType> {
	query: string;
}

const createSetQueryAction =
	(appPrefix: string) =>
	(query: string): SetQueryAction => ({
		type: setQueryActionType(appPrefix),
		query,
	});

export default createSetQueryAction;
