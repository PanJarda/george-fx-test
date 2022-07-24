import { CountryDescription, CurrencyCodeToISOTable } from "../shared";
import currencyCodeToISOStateCodes from "../shared/assets/currencyCodesToISOStateCodes.json";
import flags from "../shared/assets/flags";
import { ListIcon } from "Components/public";

interface FlagProps {
	currencyCode: string;
}

const currencyCodeToState = (code: string): CountryDescription | undefined =>
	(currencyCodeToISOStateCodes as CurrencyCodeToISOTable)[code];

const Flag = ({ currencyCode }: FlagProps): JSX.Element | null => {
	const countryDescription = currencyCodeToState(currencyCode);

	const isoStateCode = countryDescription?.CountryCode.toLowerCase();
	const flagName = `${isoStateCode}_flag`;
	const countryName = countryDescription?.Country;
	const flag =
		isoStateCode && flags.hasOwnProperty(flagName)
			? (flags[flagName] as string)
			: null;

	return flag ? (
		<ListIcon src={flag as string} alt={`${countryName} flag`} />
	) : null;
};

export default Flag;
