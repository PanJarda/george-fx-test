import { Provider } from "react-redux";
import { store } from "../shared";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExchangeRatesPage from "./ExchangeRatesPage";
import AppLayout from "./AppLayout";
import NotFound from "./NotFound";

const App = () => (
	<ErrorBoundary>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<ExchangeRatesPage />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</ErrorBoundary>
);

export default App;
