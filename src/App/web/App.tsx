import { Provider } from "react-redux";
import { store } from "../shared";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Layout from "./Layout";

const App = () => (
	<ErrorBoundary>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Layout />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</ErrorBoundary>
);

export default App;
