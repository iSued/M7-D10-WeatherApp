import { Action } from "redux";
import { searchCity } from "./store/city/actions";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";

export const thunkSearchCity = (
  message: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  const asyncResp = await exampleAPI();
  dispatch(
    searchCity({
      message,
      user: asyncResp,
      timestamp: new Date().getTime(),
    })
  );
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
