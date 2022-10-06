import React from "react";
import { SafeAreaView, Text, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Homepage = () => {
  const navigation = useNavigation();
  const openScreen = () => {
    navigation.navigate("Clues");
  };

  return (
    <ImageBackground
      source={require("../../assets/interrogation.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="START GAME"
        onPress={openScreen}
        color={"rgba(5,5,5,0.95)"}
      />
    </ImageBackground>
  );
};
