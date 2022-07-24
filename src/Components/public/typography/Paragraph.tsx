import { PropsWithChildren } from "react";

const Paragraph = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<p className="text-md">{children}</p>
);

export default Paragraph;
