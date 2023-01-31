import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 25, 
    justifyContent: "top",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
});

// ==== Folder : 4 || Video : 19 =================================
