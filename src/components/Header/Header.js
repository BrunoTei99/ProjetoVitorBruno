import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ fSize, type, text }) => {
  return (
    <View style={styles.header}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fSize ? { fontSize: fSize } : {},
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  text: {},
  text_h1: {
    fontSize: 30,
  },
});

export default Header;

/* EXEMPLO:



<Header type={"h1"} text={"Bem Vindo"} />


*/
