import { PropsWithChildren } from "react";

const SearchBar = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<div className="bg-primaryContainer p-2 sticky top-0">{children}</div>
);

export default SearchBar;
