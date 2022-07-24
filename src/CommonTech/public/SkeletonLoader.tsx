import { ApiError } from "./ApiError";
import { ApiErrorState, ApiState, ApiSuccessState } from "./ApiState";
import { ApiStatus } from "./ApiStatus";

interface SkeletonLoaderProps<T> {
	data: ApiState<T>;
	renderSuccess: (data: T) => JSX.Element;
	renderLoading?: () => JSX.Element;
	renderError?: (error: ApiError) => JSX.Element;
}

const defaultRenderLoading = () => <div>Loading...</div>;

function SkeletonLoader<T>({
	data,
	renderSuccess,
	renderError,
	renderLoading = defaultRenderLoading,
}: SkeletonLoaderProps<T>): JSX.Element | null {
	switch (data.status) {
		case ApiStatus.LOADING:
			return renderLoading();
		case ApiStatus.SUCCESS:
			return renderSuccess((data as ApiSuccessState<T>).data);
		case ApiStatus.ERROR:
			return renderError?.((data as ApiErrorState).error) ?? null;
	}
	return null;
}

export default SkeletonLoader;
