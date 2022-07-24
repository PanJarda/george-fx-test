import { PropsWithChildren } from "react";

const StickyContainer = ({
	children,
}: PropsWithChildren<Record<never, never>>) => (
	<div className="sticky top-0">{children}</div>
);

export default StickyContainer;
