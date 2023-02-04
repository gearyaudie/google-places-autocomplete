import { ISearchRedux } from "../../interface/search";
import {
  DELETE_ALL,
  DELETE_SEARCH_LIST,
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from "../types/search";

const initialState: ISearchRedux = {
  loading: false,
  search: [],
  currentLocation: { lat: 3.1569, lng: 101.7123 },
  icon: "",
  error: "",
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        currentLocation: action.payload,
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        search: [...state.search, action.payload],
        error: "",
      };
    case DELETE_SEARCH_LIST:
      return {
        ...state,
        search: state.search.filter((x: any) => x.address !== action.payload),
      };
    case DELETE_ALL:
      return {
        ...state,
        search: [],
      };
    case FETCH_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
