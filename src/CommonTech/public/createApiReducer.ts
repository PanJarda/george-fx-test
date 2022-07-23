import { ApiStatus } from "./ApiStatus";
import { ApiReadyState, ApiState } from "./ApiState";
import { ApiAction } from "./ApiAction";
import { ApiError } from "./ApiError";

const emptyState: ApiReadyState = {
	status: ApiStatus.READY,
};

const createApiReducer =
	<TData>(LOADING: string, SUCCESS: string, ERROR: string, RESET: string) =>
	(
		state = emptyState,
		{ type, data, error }: ApiAction<TData>
	): ApiState<TData> => {
		switch (type) {
			case LOADING:
				return {
					status: ApiStatus.LOADING,
				};
			case SUCCESS:
				return {
					status: ApiStatus.SUCCESS,
					data: data as TData,
				};
			case ERROR:
				return {
					status: ApiStatus.ERROR,
					error: error as ApiError,
				};
			case RESET:
				return emptyState;
		}
		return state;
	};

export default createApiReducer;
