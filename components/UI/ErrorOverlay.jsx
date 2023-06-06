import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import { GlobalStyles } from "../../constants/styles";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "white" },
  message: { fontSize: 14, fontWeight: "bold", color: "white" },
});
