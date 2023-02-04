import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Divider, Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  deleteAll,
  deleteSearchList,
  fetchLocationRequest,
} from "../redux/actions/search";
import PlacesAutocomplete from "../components/PlacesAutocomplete";

const MapComponent: React.FC = () => {
  const dispatch = useDispatch();

  const { Title } = Typography;
  const { Paragraph } = Typography;

  // Get redux state
  const currentLocation = useSelector(
    (state: RootState) => state.search.currentLocation
  );
  const searchList = useSelector((state: RootState) => state.search.search);

  // delete one search item
  const deleteSearch = (x: string) => {
    dispatch(deleteSearchList(x));
  };

  // delete all search item
  const clearAll = () => {
    dispatch(deleteAll());
  };

  const goToLocation = (lat: number, lng: number) => {
    dispatch(fetchLocationRequest({ lat, lng }));
  };

  const searchHistoryExist = searchList.length != 0;

  return (
    <div className="container">
      <GoogleMap
        zoom={10}
        center={currentLocation}
        mapContainerClassName="map-container"
      >
        {currentLocation && <MarkerF position={currentLocation} />}
      </GoogleMap>
      <div className="right-container">
        <div className="margin">
          <PlacesAutocomplete />
          <div className="history-container">
            {searchHistoryExist && (
              <div className="history-title-container">
                <Title level={4}>Your search history</Title>
                {searchList.length > 1 && (
                  <Paragraph className="clear-all" onClick={clearAll}>
                    Clear all
                  </Paragraph>
                )}
              </div>
            )}
            {searchHistoryExist &&
              searchList.map((x: any, index: number) => (
                <div className="history-section">
                  <div className="history-txt">
                    <Paragraph
                      className="history-address"
                      onClick={() => goToLocation(x.lat, x.lng)}
                    >
                      {x.address}
                    </Paragraph>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<DeleteOutlined />}
                      onClick={() => deleteSearch(x.address)}
                    />
                  </div>
                  {index !== searchList.length - 1 && (
                    <Divider className="bottom-divider" />
                  )}
                </div>
              ))}
            {!searchHistoryExist && (
              <Paragraph className="no-address">No search history</Paragraph>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
