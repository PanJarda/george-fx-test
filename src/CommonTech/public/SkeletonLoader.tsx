import { ApiError } from "./ApiError";
import { ApiErrorState, ApiState, ApiSuccessState } from "./ApiState";
import { ApiStatus } from "./ApiStatus";

interface SkeletonLoaderProps<T> {
	data: ApiState<T>;
	loading?: JSX.Element;
	renderSuccess: (data: T) => JSX.Element;
	renderError?: (error: ApiError) => JSX.Element;
}

function SkeletonLoader<T>({
	data,
	renderSuccess,
	loading,
	renderError,
}: SkeletonLoaderProps<T>): JSX.Element | null {
	switch (data.status) {
		case ApiStatus.LOADING:
			return loading ?? <div>Loading...</div>;
		case ApiStatus.SUCCESS:
			return renderSuccess((data as ApiSuccessState<T>).data);
		case ApiStatus.ERROR:
			return renderError?.((data as ApiErrorState).error) ?? null;
	}
	return null;
}

export default SkeletonLoader;
