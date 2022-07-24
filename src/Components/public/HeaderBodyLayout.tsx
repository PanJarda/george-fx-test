interface HeaderBodyLayoutProps {
	header: JSX.Element;
	body: JSX.Element;
}

const HeaderBodyLayout = ({ header, body }: HeaderBodyLayoutProps) => (
	<div className="min-h-screen grid grid-rows-headerBodyLayout align-top">
		<div>{header}</div>
		<div>{body}</div>
	</div>
);

export default HeaderBodyLayout;
