import { PropsWithChildren } from "react";

const Center = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<div className="flex items-center align-middle justify-center h-full">
		<div className="text-center">{children}</div>
	</div>
);

export default Center;
