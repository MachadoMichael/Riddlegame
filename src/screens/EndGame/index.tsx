import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  Button,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export const EndGame = () => {
  const navigation = useNavigation();
  const openScreen = () => {
    navigation.navigate("Clues");
  };

  return (
    <ImageBackground
      source={require("../../assets/winner.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundMsg}>
          <Text style={styles.congratsMsg}>WINNER!</Text>
        </View>
        <Button
          title="RESTART GAME"
          onPress={openScreen}
          color={"rgba(5,5,5,0.95)"}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
