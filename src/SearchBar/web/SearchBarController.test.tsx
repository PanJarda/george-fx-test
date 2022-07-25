import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBarController from "./SearchBarController";

const mockDispatch = jest.fn();

const mockOnSetQuery = jest.fn();

const testQuery = "test";

const mockCreateView = (setQuery: (query: string) => void) => (
	<button onClick={() => setQuery(testQuery)}>test</button>
);

jest.mock("react-redux", () => ({
	useDispatch: () => mockDispatch,
}));

describe("SearchBarController />", () => {
	test("It should mount", () => {
		render(
			<SearchBarController
				createView={mockCreateView}
				onSetQuery={mockOnSetQuery}
			/>
		);

		const button = screen.getByRole("button");

		fireEvent.click(button);

		expect(mockOnSetQuery).toHaveBeenCalledWith(mockDispatch, testQuery);
	});
});
