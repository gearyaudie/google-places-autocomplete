import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/home";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
