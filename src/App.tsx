import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
