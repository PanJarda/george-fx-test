import { FormEventHandler, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { SearchBarStateSlice } from "../shared";

interface SearchBarViewProps {
	setQuery: (query: string) => void;
	selectQuery: (state: SearchBarStateSlice) => string;
	render: (
		onInput: FormEventHandler<HTMLInputElement>,
		value: string
	) => JSX.Element;
}

const SearchBarView = ({
	setQuery,
	selectQuery,
	render,
}: SearchBarViewProps) => {
	const query = useSelector(selectQuery);

	const onInput = useCallback(
		({ target: { value } }) => setQuery(value),
		[setQuery]
	);

	return render(onInput, query);
};

export default memo(SearchBarView);
