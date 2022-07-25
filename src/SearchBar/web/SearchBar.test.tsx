import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { createSetQueryAction } from "../shared";

const mockDispatch = jest.fn();

const testQuery = "test";

jest.mock("react-redux", () => ({
	useDispatch: () => mockDispatch,
	useSelector: () => "",
}));

const appPrefix = "SEARCH_BAR";

describe("SearchBar", () => {
	test("It should mount", async () => {
		const user = userEvent.setup();
		render(<SearchBar appPrefix={appPrefix} />);

		const input = screen.getByRole("textbox");

		expect(input).toHaveValue("");

		await user.type(input, testQuery);

		expect(mockDispatch).toHaveBeenCalledWith(
			createSetQueryAction(appPrefix)("t")
		);
		expect(mockDispatch).toHaveBeenCalledWith(
			createSetQueryAction(appPrefix)("e")
		);
		expect(mockDispatch).toHaveBeenCalledWith(
			createSetQueryAction(appPrefix)("s")
		);
		expect(mockDispatch).toHaveBeenCalledWith(
			createSetQueryAction(appPrefix)("t")
		);
	});
});
