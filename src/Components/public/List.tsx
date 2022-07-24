import { PropsWithChildren } from "react";

const List = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<ul className="px-4">{children}</ul>
);

export default List;
