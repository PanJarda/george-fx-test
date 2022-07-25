import { AppActionTypes } from "./AppActionTypes";
import searchParamsReducer from "./searchParamsReducer";

const testParams = "test";

const testAction = {
	type: AppActionTypes.SET_SEARCH_PARAMS,
	params: testParams,
};

test("search params reducer", () => {
	expect(searchParamsReducer("", testAction)).toEqual(testParams);
});
