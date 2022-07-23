import { SkeletonLoader } from "CommonTech/public";
import { memo, useEffect } from "react";
import {
	createExchangeRatesRequestAction,
	createExchangeRatesResetAction,
} from "../shared";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeRatesStateSlice } from "../shared/redux/ExchangeRatesStateSlice";

interface ExchangeRatesProps {
	appPrefix: string;
}

const ExchangeRates = ({ appPrefix }: ExchangeRatesProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(createExchangeRatesRequestAction(appPrefix)());
		return () => {
			dispatch(createExchangeRatesResetAction(appPrefix)());
		};
	}, []);

	const exchangeRates = useSelector(
		(state: ExchangeRatesStateSlice) => state[appPrefix].exchangeRates
	);
	return (
		<div>
			ExchangeRates
			<SkeletonLoader
				data={exchangeRates}
				renderSuccess={(exchangeRates) => (
					<ul>
						{exchangeRates.fx.map(({ currency }) => (
							<li key={currency}>{currency}</li>
						))}
					</ul>
				)}
			/>
		</div>
	);
};

export default memo(ExchangeRates);
