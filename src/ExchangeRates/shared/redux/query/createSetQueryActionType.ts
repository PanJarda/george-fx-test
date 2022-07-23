import { AppPrefix } from "CommonTech/public";
import { SetQueryActionType } from "./SetQueryActionType";

const createSetQueryActionType = (prefix: AppPrefix): SetQueryActionType =>
	`${prefix}_SET_QUERY`;

export default createSetQueryActionType;
