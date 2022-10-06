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

export const Clues = () => {
  const navigation = useNavigation();
  const openScreen = () => {
    navigation.navigate("Game");
  };

  return (
    <ImageBackground
      source={require("../../assets/atenção.webp")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backgroundRules}>
          <Text style={styles.rule}>
            - Todas as respostas se resumem a uma palavra;
          </Text>
          <Text style={styles.rule}>- Acentue corretamente;</Text>
          <Text style={styles.rule}>
            - Letras maiúsculas e minúsculas tem mesmo valor;
          </Text>
          <Text style={styles.rule}>
            - Se a resposta for um número, escreva-o (ex: sete);
          </Text>
          <Text style={styles.rule}>
            - Cuidado com o auto completar do teclado, ele gera um espaço após a palavra;
          </Text>
        </View>
        <Button
          title="START GAME"
          onPress={openScreen}
          color={"rgba(5,5,5,0.95)"}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
