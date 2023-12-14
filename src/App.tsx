import { Provider } from "react-redux";
import "./App.css";
import MainScreen from "./screen/main-screen";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
