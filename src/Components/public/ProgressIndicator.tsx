interface ProgressIndicatorProps {
	isLoading: boolean;
}

const ProgressIndicator = ({ isLoading }: ProgressIndicatorProps) => (
	<div
		className={`absolute w-full ${
			isLoading ? "bg-primary" : "opacity-0"
		} h-1`}
	>
		<div
			className={`absolute top-0 left-0 w-full h-1 bg-onPrimary -translate-x-full ${
				isLoading ? "animate-progress" : ""
			}`}
		/>
	</div>
);

export default ProgressIndicator;
