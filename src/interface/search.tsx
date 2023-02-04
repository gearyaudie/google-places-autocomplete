export interface ISearchRedux {
  loading?: boolean;
  search?: any;
  currentLocation?: { lat: number; lng: number };
  icon?: any;
  error?: "";
}

export interface ISearchData {
  address: string;
  lat: number;
  lng: number;
}
