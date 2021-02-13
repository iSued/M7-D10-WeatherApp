export interface City {
  city: string;
}
export const SEARCH_CITY = "SEARCH_CITY";

interface SearchCityAction {
  type: typeof SEARCH_CITY;
  payload: City;
}

export type CityActionTypes = SearchCityAction;
