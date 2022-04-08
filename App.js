import Navigator from "./navigation/Navigator";
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
   return <Navigator />;
}
