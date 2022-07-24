import { memo, useMemo } from "react";
import { createExchangeRatesModel, FX, filterByQuery } from "../shared";
import ExchangeRatesController from "./ExchangeRatesController";
import Flag from "./Flag";
import ExchangeRatesView from "./ExchangeRatesView";
import { Alert, List, ListItem } from "Components/public";
import ListItemSkeleton from "../../Components/public/ListItemSkeleton";

interface ExchangeRatesProps {
	appPrefix: string;
}

const ExchangeRates = ({ appPrefix }: ExchangeRatesProps) => {
	const exchangeRatesModel = useMemo(
		() => createExchangeRatesModel(appPrefix),
		[appPrefix]
	);

	return (
		<ExchangeRatesController
			onMount={exchangeRatesModel.fetchExchangeRates}
			onUnmount={exchangeRatesModel.resetExchangeRates}
			onReset={exchangeRatesModel.resetExchangeRates}
			renderView={(reset) => (
				<ExchangeRatesView
					selectQuery={exchangeRatesModel.selectQuery}
					selectExchangeRates={exchangeRatesModel.selectExchangeRates}
					renderLoading={() => (
						<List>
							{new Array(5).fill(1).map((v, i) => (
								//eslint-disable-next-line react/no-array-index-key
								<ListItemSkeleton key={"skeleton_" + i} />
							))}
						</List>
					)}
					renderError={() => (
						<Alert
							message="We are sorry, but we were unabled to download exchange Rates. Please try again later."
							onClose={reset}
						/>
					)}
					render={(query: string, exchangeRates: FX[]) => (
						<List>
							{exchangeRates
								.filter(filterByQuery(query))
								.map(
									({
										currency,
										currencyName,
										exchangeRate,
										countryName,
									}) => (
										<ListItem
											key={currency}
											icon={
												<Flag currencyCode={currency} />
											}
											title={currencyName ?? currency}
											subtitle={countryName}
											badge={`${exchangeRate} ${currency}`}
										/>
									)
								)}
						</List>
					)}
				/>
			)}
		/>
	);
};

export default memo(ExchangeRates);
