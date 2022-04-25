import Navigator from "./navigation/Navigator";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import userReducer from "./store/reducers/userReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducer = combineReducers({ userReducer });
const store = configureStore({ reducer });


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
