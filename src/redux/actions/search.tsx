import { Dispatch } from "redux";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  DELETE_ALL,
  DELETE_SEARCH_LIST,
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from "../types/search";

export const fetchLocationRequest: any = (values: {
  lat: number;
  lng: number;
}) => {
  return {
    type: FETCH_LOCATION_REQUEST,
    payload: values,
  };
};

export const fetchLocationSuccess = (values: {}) => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: values,
  };
};

export const fetchLocationFailure = (error: string) => {
  return {
    type: FETCH_LOCATION_FAILURE,
    payload: error,
  };
};

export const deleteSearchList = (values: string) => {
  return {
    type: DELETE_SEARCH_LIST,
    payload: values,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export const fetchLocation: any = (address: string) => {
  return async (dispatch: Dispatch) => {
    const results = await getGeocode({ address });

    if (results) {
      const { lat, lng } = await getLatLng(results[0]);
      dispatch(fetchLocationRequest({ lat, lng }));
      dispatch(fetchLocationSuccess({ address, lat, lng }));
    } else {
      dispatch(fetchLocationFailure("Error Fetching location"));
    }
  };
};
