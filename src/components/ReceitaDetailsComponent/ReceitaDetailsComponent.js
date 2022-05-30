import React from "react";
import { StyleSheet, View, Text } from "react-native";

import BarCodeGenerator from "../BarCodeGenenrator/BarCodeGenerator";

const ReceitaDetailsComponent = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 17 }}>N Receita</Text>

      <BarCodeGenerator value={recipe.number} formato="CODE128" />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <Text>{recipe.number}</Text>
      </View>
      <Text>
        <Text style={{ fontWeight: "700" }}>Data Prescricao:</Text> 2020-05-02
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ReceitaDetailsComponent;
