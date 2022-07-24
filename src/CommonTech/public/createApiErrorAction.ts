import { ApiError } from "./ApiError";
import { ApiErrorAction } from "./ApiErrorAction";

const createApiErrorAction =
	(type: string) =>
	(error: ApiError): ApiErrorAction => ({
		type,
		error,
	});

export default createApiErrorAction;
