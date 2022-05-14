import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage"

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "Reactotron In Expo demo",
    host: '192.168.0.198'
  })
  .useReactNative()
  .connect();