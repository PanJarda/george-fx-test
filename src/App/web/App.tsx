import { Provider } from "react-redux";
import { store } from "../shared";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExchangeRatesPage from "./ExchangeRatesPage";

const App = () => (
	<ErrorBoundary>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<ExchangeRatesPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</ErrorBoundary>
);

export default App;
