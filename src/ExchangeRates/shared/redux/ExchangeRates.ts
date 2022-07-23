type Currency = string;

interface Rate {
	buy: number;
	middle: number;
	sell: number;
	indicator: number;
	lastModified: Date;
}

interface FX {
	currency: Currency;
	precision: number;
	nameI18N: string;
	exchangeRate: Rate;
	banknoteRate: Rate;
	flags: string[];
}

export interface ExchangeRates {
	institute: number;
	lastUpdated: Date;
	comparisonDate: Date;
	baseCurrency: Currency;
	fx: FX[];
}
