import { Provider } from "react-redux";
import { store } from "../shared";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
