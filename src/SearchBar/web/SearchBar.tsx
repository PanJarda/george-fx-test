import { memo, useCallback, useMemo } from "react";
import SearchBarView from "./SearchBarView";
import SearchBarController from "./SearchBarController";
import { createSearchBarModel } from "../shared";

interface SearchBarProps {
	appPrefix: string;
}

const SearchBar = ({ appPrefix }: SearchBarProps) => {
	const searchBarModel = useMemo(
		() => createSearchBarModel(appPrefix),
		[appPrefix]
	);

	return (
		<SearchBarController
			onSetQuery={searchBarModel.setQuery}
			createView={useCallback(
				(setQuery) => (
					<SearchBarView
						setQuery={setQuery}
						selectQuery={searchBarModel.selectQuery}
						render={useCallback(
							(onInput, value) => (
								<div className="sticky top-0">
									<input
										className="rounded-16 border-1"
										type="text"
										onInput={onInput}
										value={value}
									/>
								</div>
							),
							[]
						)}
					/>
				),
				[searchBarModel]
			)}
		/>
	);
};

export default memo(SearchBar);
