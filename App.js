import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [num, setName] = useState("jn");
  const [acres, onChangeValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style ={styles.text}>check your acres here</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeValue(value / 0.4)}
        placeholder="enter hectares "
        keyboardType="numeric"
      />

      <Text style={styles.text}>It is  :{acres} acres </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#50623a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
  },
});
