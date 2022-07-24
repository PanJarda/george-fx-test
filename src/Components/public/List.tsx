import { PropsWithChildren } from "react";

const List = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<ul>{children}</ul>
);

export default List;
