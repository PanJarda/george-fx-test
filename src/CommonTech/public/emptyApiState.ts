import { ApiStatus } from "./ApiStatus";
import { ApiReadyState } from "./ApiState";

const emptyApiState: ApiReadyState = {
	status: ApiStatus.READY,
};

export default emptyApiState;
