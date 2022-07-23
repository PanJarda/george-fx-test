import { memo } from "react";
import { SearchBar } from "SearchBar/web";
import { ExchangeRates } from "ExchangeRates/web";
import { AppPrefixes } from "../shared";

const Layout = () => {
	return (
		<div>
			<div>George FX Test</div>
			<SearchBar appPrefix={AppPrefixes.SEARCH_BAR} />
			<ExchangeRates appPrefix={AppPrefixes.EXCHANGE_RATES} />
		</div>
	);
};

export default memo(Layout);
