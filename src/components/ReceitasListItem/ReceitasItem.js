import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Pressable,
} from "react-native";

const ReceitasItem = ({ recipe }) => {
  const navigation = useNavigation();
  const onPress = () => {
    console.warn("pressionado ");
    navigation.navigate("ReceitaDetails", { id: recipe.id });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.rowView}>
          <View style={{ flex: 0.8, alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "700" }}>Numero Receita:</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{recipe.number}</Text>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={{ flex: 0.8, alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "700" }}>Data Prescricao:</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{recipe.prescriptionDate}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    backgroundColor: "grey",
    borderRadius: 10,
    marginBottom: 7,
  },
  rowView: {
    marginTop: 4,
    flexDirection: "row",
  },
});

export default ReceitasItem;
