import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/Home";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
