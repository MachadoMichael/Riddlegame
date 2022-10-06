import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { levels } from "../../levels";
import { styles } from "./styles";

export const Game = () => {
  useEffect(() => {}, []);
  const [stage, setStage] = useState(levels[0]);
  const [answer, setAnswer] = useState("");
  const navigation = useNavigation();

  const checkAnswer = () => {
    if (stage === levels[10] && answer === stage.answer) {
      setStage(levels[0]);
      setAnswer("");

      navigation.navigate("EndGame");
    } else {
      if (answer === stage.answer) {
        navigation.navigate("Congrats");
        setTimeout(() => {
          setStage(levels[stage.name + 1]);
          setAnswer("");
        }, 1000);
      } else {
        navigation.navigate("Fail");
        setAnswer("");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/wallpaperGame.jpg")}
      style={styles.wallpaper}
    >
      <SafeAreaView style={styles.questionContainer}>
        <Text style={styles.question}>{stage.question}</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.answerContainer}>
        <TextInput
          style={styles.answerInput}
          value={answer}
          onChangeText={(e) => setAnswer(e.toLowerCase())}
        ></TextInput>
        <Button title="check" onPress={checkAnswer} color={"transparent"} />
      </SafeAreaView>
    </ImageBackground>
  );
};
