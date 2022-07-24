interface AlertProps {
	message: string;
	onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => (
	<div className="flex justify-between bg-tertiary bg-gradient-to-t text-onTertiary fixed top-8 mx-auto left-1/2 -translate-x-1/2 w-full max-w-3xl rounded-lg z-100 drop-shadow-xl align-middle">
		<div className="rounded-l-lg py-2 pl-4 text-sm align-middle">
			{message}
		</div>
		<button className="rounded-r-lg px-4 py-2 h-full" onClick={onClose}>
			X
		</button>
	</div>
);

export default Alert;
