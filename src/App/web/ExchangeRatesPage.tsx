import { memo } from "react";
import { SearchBar } from "SearchBar/web";
import { ExchangeRates } from "ExchangeRates/web";
import { AppPrefixes, appModel } from "../shared";
import SearchParamsConnector from "./SearchParamsConnector";

const ExchangeRatesPage = () => {
	return (
		<SearchParamsConnector
			initalSetSearchParams={appModel.setSearchParams}
			selectSearchParams={appModel.selectSearchParams}
		>
			<div>
				<div>George FX Test</div>
				<SearchBar appPrefix={AppPrefixes.SEARCH_BAR} />
				<ExchangeRates appPrefix={AppPrefixes.EXCHANGE_RATES} />
			</div>
		</SearchParamsConnector>
	);
};

export default memo(ExchangeRatesPage);
