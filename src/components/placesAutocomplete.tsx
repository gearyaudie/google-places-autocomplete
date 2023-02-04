import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { AutoComplete } from "antd";
import { useDispatch } from "react-redux";

import { fetchLocation } from "../redux/actions/search";

const PlacesAutocomplete: React.FC<any> = () => {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const dispatch = useDispatch();
  const { Option }: any = AutoComplete;

  // Move the map and save data when a place is selected
  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();
    dispatch(fetchLocation(address));
    setValue("");
  };

  return (
    <AutoComplete
      value={value}
      className="main-input"
      onSelect={handleSelect}
      onChange={(e) => setValue(e)}
      placeholder="Enter a place"
    >
      {status === "OK" &&
        data.map(({ place_id, description }) => (
          <Option key={place_id} value={description}>
            {description}
          </Option>
        ))}
    </AutoComplete>
  );
};

export default PlacesAutocomplete;
