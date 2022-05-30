import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import Header from "../../components/Header/Header";
import CustomButton from "../../components/CustomButton/CustomButton";
import FarmaciaServico from "../../components/FarmaciaServico/FarmaciaServico";
import MapViewComponent from "../../components/MapViewComponent/MapViewComponent";
import { useNavigation } from "@react-navigation/native";

//DATA
import { DataStore } from "aws-amplify";
import { Farmacia } from "../../models";

const HomeScreen = () => {
  //HANDELING NAVIGATION
  const navigation = useNavigation();

  //HANDELING DATA
  const [farmacia, setFarmacia] = useState([]);

  useEffect(() => {
    DataStore.query(Farmacia).then(setFarmacia);
  }, []);

  const onSubmeterReceita = () => {
    console.warn("onSubmeterReceita pressionado");
    navigation.navigate("Receitas");
  };

  return (
    <View style={styles.container}>
      <Header type={"h1"} text={"Bem Vindo"} />

      <View style={{ margin: 10 }}>
        <FlatList
          data={farmacia}
          renderItem={({ item }) => <FarmaciaServico pharmacy={item} />}
        />
      </View>

      <MapViewComponent />
      <View style={{ margin: 10 }}>
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
  rowView: {
    marginTop: 4,
    flexDirection: "row",
  },
});

export default HomeScreen;
