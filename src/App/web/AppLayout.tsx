import { AppHeader, HeaderBodyLayout } from "Components/public";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const AppLayout = () => (
	<HeaderBodyLayout
		header={
			<AppHeader>
				<Link to="/">George FE Test</Link>
			</AppHeader>
		}
		body={<Outlet />}
	/>
);

export default AppLayout;
