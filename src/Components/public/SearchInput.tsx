import { FormEventHandler } from "react";

interface SearchInputProps {
	onInput: FormEventHandler<HTMLInputElement>;
	value: string;
	placeholder?: string;
}

const SearchInput = ({ onInput, value, placeholder }: SearchInputProps) => (
	<input
		className="rounded text-sm p-1 w-full shadow-inner-md outline-secondary"
		type="text"
		placeholder={placeholder}
		onInput={onInput}
		value={value}
	/>
);

export default SearchInput;
