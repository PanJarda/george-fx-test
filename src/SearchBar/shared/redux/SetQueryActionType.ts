export type SetQueryActionType = `${string}_SET_QUERY`;

const setQueryActionType = (prefix: string): SetQueryActionType =>
	`${prefix}_SET_QUERY`;

export default setQueryActionType;
