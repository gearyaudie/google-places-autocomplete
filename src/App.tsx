import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import HomeScreen from "./screens/home";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
