import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../../components/Header/Header";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReceitasItem from "../../components/ReceitasListItem/ReceitasItem";
import recipes from "../../../assets/Data/recipes.json";

const ReceitasListScreen = () => {
  const onSubmeterReceita = () => {
    console.warn("onSubmeterReceita pressionado");
  };

  return (
    <View style={styles.container}>
      <Header type={"h1"} text={"Receitas"} />

      <View style={{ margin: 10, width: "100%", flex: 6 }}>
        <FlatList
          data={recipes}
          renderItem={({ item }) => <ReceitasItem recipe={item} />}
        />
      </View>
      <View style={{ flex: 2 }}>
        <CustomButton text={"Submeter Receita"} onPress={onSubmeterReceita} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default ReceitasListScreen;
