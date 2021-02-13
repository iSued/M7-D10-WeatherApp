import { City, SEARCH_CITY, CityActionTypes } from "./types";

const initialState: City = {
  city: "",
};

export function cityReducer(
  state = initialState,
  action: CityActionTypes
): City {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        city: action.payload.city,
      };
    default:
      return state;
  }
}
