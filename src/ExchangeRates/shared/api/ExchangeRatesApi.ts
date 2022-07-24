import { ApiConfiguration } from "CommonTech/public";
import { ExchangeRatesData } from "./ExchangeRatesData";

const URI = "c88db14a-3128-4fbd-af74-1371c5bb0343";

class ExchangeRatesApi {
	private configuration: ApiConfiguration;

	constructor(configuration: ApiConfiguration) {
		this.configuration = configuration;
	}

	fetchExchangeRates(): Promise<ExchangeRatesData> {
		return fetch(`${this.configuration.baseUrl}${URI}`).then(
			(response: Response) => {
				if (!response.ok) {
					throw response;
				}
				return response.json() as Promise<ExchangeRatesData>;
			}
		);
	}
}

export default ExchangeRatesApi;
