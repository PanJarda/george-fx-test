import { SetQueryActionType } from "./SetQueryActionType";

const createSetQueryActionType = (prefix: string): SetQueryActionType =>
	`${prefix}_SET_QUERY`;

export default createSetQueryActionType;
