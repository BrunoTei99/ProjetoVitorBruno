import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../../components/Header/Header";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReceitasItem from "../../components/ReceitasItem/ReceitasItem";
import recipes from "../../../assets/Data/recipes.json";

const ReceitasScreen = () => {
  const onSubmeterReceita = () => {
    console.warn("onSubmeterReceita pressionado");
  };

  return (
    <View style={styles.container}>
      <Header type={"h1"} text={"Receitas"} />
      <View style={{ margin: 10, width: "100%" }}>
        <FlatList
          data={recipes}
          renderItem={({ item }) => <ReceitasItem recipe={item} />}
        />
      </View>

      <CustomButton text={"Submeter Receita"} onPress={onSubmeterReceita} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default ReceitasScreen;
