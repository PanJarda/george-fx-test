import { memo, useMemo } from "react";
import { createExchangeRatesModel, FX, filterByQuery } from "../shared";
import ExchangeRatesController from "./ExchangeRatesController";
import Flag from "./Flag";
import ExchangeRatesView from "./ExchangeRatesView";
import { List, ListItem } from "Components/public";

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
			renderView={() => (
				<ExchangeRatesView
					selectQuery={exchangeRatesModel.selectQuery}
					selectExchangeRates={exchangeRatesModel.selectExchangeRates}
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
