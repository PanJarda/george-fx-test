import { ApiState } from "CommonTech/public";
import { useSelector } from "react-redux";
import { ExchangeRatesStateSlice, FX } from "../shared";
import { SkeletonLoader } from "CommonTech/public";
import { memo } from "react";

interface ExchangeRatesViewProps {
	selectQuery: (state: ExchangeRatesStateSlice) => string;
	selectExchangeRates: (state: ExchangeRatesStateSlice) => ApiState<FX[]>;
	render: (query: string, exchangeRates: FX[]) => JSX.Element;
}

const ExchangeRatesView = ({
	selectQuery,
	selectExchangeRates,
	render,
}: ExchangeRatesViewProps) => {
	const query = useSelector(selectQuery);
	const exchangeRates = useSelector(selectExchangeRates);

	return (
		<SkeletonLoader
			data={exchangeRates}
			renderSuccess={(exchangeRates) => render(query, exchangeRates)}
		/>
	);
};

export default memo(ExchangeRatesView);
