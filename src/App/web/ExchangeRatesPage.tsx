import { memo } from "react";
import { SearchBar } from "SearchBar/web";
import { ExchangeRates } from "ExchangeRates/web";
import { AppPrefixes, appModel } from "../shared";
import SearchParamsConnector from "./SearchParamsConnector";
import { AppHeader, StickyContainer } from "Components/public";
import ProgressIndicator from "./ProgressIndicator";

const ExchangeRatesPage = () => {
	return (
		<SearchParamsConnector
			initalSetSearchParams={appModel.setSearchParams}
			selectSearchParams={appModel.selectSearchParams}
		>
			<AppHeader>George FE Test</AppHeader>
			<StickyContainer>
				<ProgressIndicator selectIsLoading={appModel.selectIsLoading} />
				<SearchBar appPrefix={AppPrefixes.SEARCH_BAR} />
			</StickyContainer>
			<ExchangeRates appPrefix={AppPrefixes.EXCHANGE_RATES} />
		</SearchParamsConnector>
	);
};

export default memo(ExchangeRatesPage);
