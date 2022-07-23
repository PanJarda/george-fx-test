import { Action } from "redux";
import { SetQueryActionType } from "./SetQueryActionType";
import { Query } from "./Query";

export interface SetQueryAction extends Action<SetQueryActionType> {
	query: Query;
}
