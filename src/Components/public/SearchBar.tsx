import { PropsWithChildren } from "react";

const SearchBar = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<div className="bg-primaryContainer p-2">{children}</div>
);

export default SearchBar;
