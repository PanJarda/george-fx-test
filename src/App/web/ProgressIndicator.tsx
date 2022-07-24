import { AppState } from "App/shared";
import { useSelector } from "react-redux";
import { ProgressIndicator as ProgressIndicatorComponent } from "Components/public";

interface ProgressBarProps {
	selectIsLoading: (state: AppState) => boolean;
}

const ProgressIndicator = ({ selectIsLoading }: ProgressBarProps) => {
	const isLoading = useSelector(selectIsLoading);

	return <ProgressIndicatorComponent isLoading={isLoading} />;
};

export default ProgressIndicator;
