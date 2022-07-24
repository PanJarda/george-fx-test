import { memo, useCallback, useMemo } from "react";
import SearchBarView from "./SearchBarView";
import SearchBarController from "./SearchBarController";
import { createSearchBarModel } from "../shared";
import {
	SearchBar as SearchBarComponent,
	SearchInput,
} from "Components/public";

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
								<SearchBarComponent>
									<SearchInput
										onInput={onInput}
										value={value}
										placeholder="Search"
									/>
								</SearchBarComponent>
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
