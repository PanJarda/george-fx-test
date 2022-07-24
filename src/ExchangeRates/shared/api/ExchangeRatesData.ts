interface Rate {
	middle?: number;
	buy?: number;
	sell?: number;
}

export interface FX {
	currency: string;
	exchangeRate?: Rate;
	nameI18N?: string;
}

export interface ExchangeRatesData {
	fx: FX[];
}
