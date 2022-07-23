export interface CountryDescription {
	Country: string;
	CountryCode: string;
	Currency: string;
}

export interface CurrencyCodeToISOTable {
	[currencyCode: string]: CountryDescription;
}
