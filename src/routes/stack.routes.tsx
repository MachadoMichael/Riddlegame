import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Homepage } from "../screens/Homepage";
import { Game } from "../screens/Game";
import { Clues } from "../screens/Clues";
import { Congrats } from "../screens/Congrats";
import { Fail } from "../screens/Fail";
import { EndGame } from "../screens/EndGame";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#FFF",
      }}
    >
      <Screen
        name="Homepage"
        component={Homepage}
        options={{
          title: "RIDDLE GAME",
        }}
      ></Screen>
      <Screen name="Clues" component={Clues}></Screen>
      <Screen
        name="Game"
        component={Game}
        options={{
          title: "RIDDLER GAME",
        }}
      ></Screen>

      <Screen name="Congrats" component={Congrats}></Screen>
      <Screen name="Fail" component={Fail}></Screen>
      <Screen name="EndGame" component={EndGame}></Screen>
    </Navigator>
  );
};
