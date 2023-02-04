import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchLocation } from "../redux/actions/search";
import { RootState } from "../redux/reducers";

const PlacesAutocomplete: React.FC<any> = () => {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const dispatch = useDispatch();
  const { Option }: any = AutoComplete;
  const searchList = useSelector((state: RootState) => state.search.search);

  // Move the map and save data when a place is selected
  const handleSelect = async (address: string) => {
    let existInSearchHistory = searchList.some(
      (x: any) => x.address === address
    );

    // Show info notification when search history already exist
    if (existInSearchHistory) {
      toast.info("This location already exist in your search history 😉");
    } else {
      setValue(address, false);
      dispatch(fetchLocation(address));
    }
    clearSuggestions();
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
