export type SetQueryActionType = `${string}_SET_QUERY`;

const createSetQueryActionType = (prefix: string): SetQueryActionType =>
	`${prefix}_SET_QUERY`;

export default createSetQueryActionType;
