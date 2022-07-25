import createSetSearchParamsAction from "./createSetSearchParamsAction";
import { AppActionTypes } from "./AppActionTypes";

test("create SET_SEARCH_PARAMS action", () => {
	expect(createSetSearchParamsAction("test")).toStrictEqual({
		type: AppActionTypes.SET_SEARCH_PARAMS,
		params: "test",
	});
});
