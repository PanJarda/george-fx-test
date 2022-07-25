import createSetQueryActionType from "./createSetQueryActionType";
import createSearchBarReducer from "./createSearchBarReducer";

const testQuery = "test";

const appPrefix = "appPrefix";

const testAction = {
	type: createSetQueryActionType(appPrefix),
	query: testQuery,
};

const initState = {
	query: "",
};

const resultState = {
	query: testQuery,
};

test("search bar reducer", () => {
	const reducer = createSearchBarReducer(appPrefix);
	expect(reducer(initState, testAction)).toEqual(resultState);
});
