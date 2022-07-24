import { memo, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface ExchangeRatesControllerProps {
	onMount: (dispatch: Dispatch) => void;
	onUnmount: (dispatch: Dispatch) => void;
	onReset: (dispatch: Dispatch) => void;
	renderView: (reset: () => void) => JSX.Element;
}

const ExchangeRatesController = ({
	onMount,
	onUnmount,
	onReset,
	renderView,
}: ExchangeRatesControllerProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		onMount(dispatch);
		return () => {
			onUnmount(dispatch);
		};
	}, []);

	const reset = () => onReset(dispatch);

	return renderView(reset);
};

export default memo(ExchangeRatesController);
