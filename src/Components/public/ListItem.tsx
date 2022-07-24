import { PropsWithChildren } from "react";

const ListItem = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<li>{children}</li>
);

export default ListItem;
