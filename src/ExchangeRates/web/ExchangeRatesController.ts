import { memo, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface ExchangeRatesControllerProps {
	onMount: (dispatch: Dispatch) => void;
	onUnmount: (dispatch: Dispatch) => void;
	renderView: () => JSX.Element;
}

const ExchangeRatesController = ({
	onMount,
	onUnmount,
	renderView,
}: ExchangeRatesControllerProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		onMount(dispatch);
		return () => {
			onUnmount(dispatch);
		};
	}, []);
	return renderView();
};

export default memo(ExchangeRatesController);
