import React, { FormEventHandler } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBarView from "./SearchBarView";

const mockSetQuery = jest.fn();

const mockSelectQuery = jest.fn();

const testQuery = "test";

const mockRender = (
	onInput: FormEventHandler<HTMLInputElement>,
	value: string
) => <input onInput={onInput} value={value} />;

jest.mock("react-redux", () => ({
	useSelector: () => "",
}));

describe("SearchBarView", () => {
	test("It should mount", async () => {
		const user = userEvent.setup();
		render(
			<SearchBarView
				setQuery={mockSetQuery}
				selectQuery={mockSelectQuery}
				render={mockRender}
			/>
		);

		const input = screen.getByRole("textbox");

		expect(input).toHaveValue("");

		await user.type(input, testQuery);

		expect(mockSetQuery).toHaveBeenCalledWith("t");
		expect(mockSetQuery).toHaveBeenCalledWith("e");
		expect(mockSetQuery).toHaveBeenCalledWith("s");
		expect(mockSetQuery).toHaveBeenCalledWith("t");
	});
});
