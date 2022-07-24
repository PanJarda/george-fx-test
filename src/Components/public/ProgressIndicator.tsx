interface ProgressIndicatorProps {
	isLoading: boolean;
}

const ProgressIndicator = ({ isLoading }: ProgressIndicatorProps) =>
	isLoading ? (
		<div className="relative w-full bg-secondaryContainer h-1">
			<div className="absolute top-0 left-0 w-full h-1 bg-primary -translate-x-full animate-progress" />
		</div>
	) : (
		<></>
	);

export default ProgressIndicator;
