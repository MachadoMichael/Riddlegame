import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wallpaper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    
      questionContainer: {
        width: 350,
        height: 320,
        backgroundColor: "rgba(5,5,5,0.95)",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      },
    
      answerContainer: {
        width: 350,
        height: 100,
        backgroundColor: "rgba(5,5,5,0.95)",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        marginTop: 40,
      },
    
      question: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
      },
    
      answerInput: {
        width: 150,
        height: 30,
        backgroundColor: "rgba(255,255,255,0.9)",
        textAlign: "center",
      },
});
