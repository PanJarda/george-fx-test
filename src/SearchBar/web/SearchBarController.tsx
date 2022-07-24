import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

interface SearchBarControllerProps {
	onSetQuery: (dispatch: Dispatch, query: string) => void;
	createView: (setQuery: (query: string) => void) => JSX.Element;
}

const SearchBarController = ({
	onSetQuery,
	createView,
}: SearchBarControllerProps) => {
	const dispatch = useDispatch();

	const setQuery = useCallback(
		(query: string) => onSetQuery(dispatch, query.trimStart()),
		[onSetQuery]
	);

	return createView(setQuery);
};

export default memo(SearchBarController);
