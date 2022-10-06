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

export const Congrats = () => {
  const navigation = useNavigation();
  const openScreen = () => {
    navigation.navigate("Game");
  };

  return (
    <ImageBackground
      source={require("../../assets/congrats.webp")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundMsg}>
          <Text style={styles.congratsMsg}>CONGRATULATION!</Text>
        </View>
        <Button
          title="NEXT LEVEL"
          onPress={openScreen}
          color={"rgba(5,5,5,0.95)"}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
