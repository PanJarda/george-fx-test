import { PropsWithChildren } from "react";

const AppHeader = ({ children }: PropsWithChildren<Record<never, never>>) => (
	<div className="bg-primary text-onPrimary text-lg py-4 px-2">
		{children}
	</div>
);

export default AppHeader;
