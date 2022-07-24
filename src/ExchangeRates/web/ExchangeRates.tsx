import { memo, useCallback, useMemo } from "react";
import { createExchangeRatesModel, FX, filterByQuery } from "../shared";
import ExchangeRatesController from "./ExchangeRatesController";
import Flag from "./Flag";
import ExchangeRatesView from "./ExchangeRatesView";

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
			renderView={useCallback(
				() => (
					<ExchangeRatesView
						selectQuery={exchangeRatesModel.selectQuery}
						selectExchangeRates={
							exchangeRatesModel.selectExchangeRates
						}
						render={useCallback(
							(query: string, exchangeRates: FX[]) => (
								<ul>
									{exchangeRates
										.filter(filterByQuery(query))
										.map(({ currency, exchangeRate }) => {
											return (
												<li key={currency}>
													<Flag
														currencyCode={currency}
													/>
													{exchangeRate} {currency}
												</li>
											);
										})}
								</ul>
							),
							[]
						)}
					/>
				),
				[exchangeRatesModel]
			)}
		/>
	);
};

export default memo(ExchangeRates);
