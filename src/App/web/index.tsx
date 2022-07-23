import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "Components/public/index.css";
import { StrictMode } from "react";

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);

export {};
