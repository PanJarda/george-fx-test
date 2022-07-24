import { PropsWithChildren } from "react";

const Headline = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<h1 className="text-3xl">{children}</h1>
);

export default Headline;
