import { City, SEARCH_CITY, CityActionTypes } from "./types";

export function searchCity(newCity: City): CityActionTypes {
  return {
    type: SEARCH_CITY,
    payload: newCity,
  };
}
