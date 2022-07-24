import { ApiError, ApiState } from "CommonTech/public";
import { useSelector } from "react-redux";
import { ExchangeRatesStateSlice, FX } from "../shared";
import { SkeletonLoader } from "CommonTech/public";
import { memo } from "react";

interface ExchangeRatesViewProps {
	selectQuery: (state: ExchangeRatesStateSlice) => string;
	selectExchangeRates: (state: ExchangeRatesStateSlice) => ApiState<FX[]>;
	render: (query: string, exchangeRates: FX[]) => JSX.Element;
	renderLoading: () => JSX.Element;
	renderError: (error: ApiError) => JSX.Element;
}

const ExchangeRatesView = ({
	selectQuery,
	selectExchangeRates,
	renderLoading,
	renderError,
	render,
}: ExchangeRatesViewProps) => {
	const query = useSelector(selectQuery);
	const exchangeRates = useSelector(selectExchangeRates);

	return (
		<SkeletonLoader
			data={exchangeRates}
			renderLoading={renderLoading}
			renderSuccess={(exchangeRates) => render(query, exchangeRates)}
			renderError={renderError}
		/>
	);
};

export default memo(ExchangeRatesView);
