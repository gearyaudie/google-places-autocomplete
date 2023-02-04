import { useLoadScript } from "@react-google-maps/api";
import { Spin } from "antd";

import MapComponent from "../components/Map";
import NavbarComponent from "../layouts/Navbar";
import Layout from "../layouts/Layout";

export default function HomeScreen() {
  const apiKey: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  // Show spinner on loading
  if (!isLoaded)
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );

  return (
    <Layout>
      <NavbarComponent />
      <MapComponent />
    </Layout>
  );
}
