import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useSearchParams } from "react-router-dom";
import { AppState } from "../shared";

interface SearchParamsConnectorProps {
	initalSetSearchParams: (dispatch: Dispatch, params: string) => void;
	selectSearchParams: (state: AppState) => string;
}

const SearchParamsConnector = ({
	children,
	initalSetSearchParams,
	selectSearchParams,
}: PropsWithChildren<SearchParamsConnectorProps>): JSX.Element | null => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const queryString = searchParams.toString();

	const reduxSearchParamsQueryString = useSelector(selectSearchParams);

	useEffect(() => {
		setSearchParams(new URLSearchParams(reduxSearchParamsQueryString));
	}, [reduxSearchParamsQueryString]);

	useEffect(() => {
		initalSetSearchParams(dispatch, queryString);
	}, []);

	return <>{children}</>;
};

export default SearchParamsConnector;
