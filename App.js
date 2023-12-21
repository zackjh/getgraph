import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as MediaLibrary from "expo-media-library";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PaperProvider } from "react-native-paper";
import Bar from "./components/Screens/Bar";
import Pie from "./components/Screens/Pie";

const Drawer = createDrawerNavigator();

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="NewScatter"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FEFBFE",
              shadowColor: "#000000",
              shadowOpacity: 0.25,
              shadowRadius: 1.42,
            },
            headerTintColor: "#1C1B1F",
            drawerStyle: {
              width: "60%",
              backgroundColor: "#FEFBFE",
            },
            drawerActiveTintColor: "#1C1B1F",
          }}
        >
          <Drawer.Screen name="Bar" component={Bar} />
          <Drawer.Screen name="Pie" component={Pie} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
