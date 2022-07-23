import createSetQueryActionType, {
	SetQueryActionType,
} from "./createSetQueryActionType";
import { Action } from "redux";

export interface SetQueryAction extends Action<SetQueryActionType> {
	query: string;
}

const createSetQueryAction =
	(appPrefix: string) =>
	(query: string): SetQueryAction => ({
		type: createSetQueryActionType(appPrefix),
		query,
	});

export default createSetQueryAction;
