import { SkeletonLoader } from "CommonTech/public";
import { memo, useEffect } from "react";
import {
	createExchangeRatesRequestAction,
	createExchangeRatesResetAction,
} from "../shared";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeRatesStateSlice } from "../shared";
import Flag from "./Flag";

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

	const query = useSelector(
		(state: ExchangeRatesStateSlice) => state[appPrefix].query
	);

	return (
		<div>
			ExchangeRates
			<SkeletonLoader
				data={exchangeRates}
				renderSuccess={(exchangeRates) => (
					<ul>
						{exchangeRates
							.filter(
								({ currency, currencyName }) =>
									!query ||
									currency.startsWith(query.toUpperCase()) ||
									currencyName
										?.toLowerCase()
										.startsWith(query.toLowerCase())
							)
							.map(({ currency, exchangeRate }) => {
								return (
									<li key={currency}>
										<Flag currencyCode={currency} />
										{exchangeRate} {currency}
									</li>
								);
							})}
					</ul>
				)}
			/>
		</div>
	);
};

export default memo(ExchangeRates);
