import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import Header from "../../components/Header/Header";
import recipes from "../../../assets/Data/recipes.json";
import ReceitaDetailsComponent from "../../components/ReceitaDetailsComponent/ReceitaDetailsComponent";
import CustomButton from "../../components/CustomButton/CustomButton";
import BarCodeGenerator from "../../components/BarCodeGenenrator/BarCodeGenerator";
import { useRoute } from "@react-navigation/native";

const ReceitaDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOpcaoVisible, setModalOpcaoVisible] = useState(false);

  const recipe = recipes[0];

  const route = useRoute();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.container}>
      <Header type={"h1"} text={"Receita"} />

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

      <View style={styles.rowView}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <CustomButton
            text={"Pin Acesso"}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <CustomButton
            text={"Pin Acesso"}
            onPress={() => setModalOpcaoVisible(true)}
          />
        </View>
      </View>
      {/* MODAL PIN ACESSO  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Pin Acesso</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <BarCodeGenerator value={recipe.pinAcesso} formato="CODE128" />
              <Text>{recipe.pinAcesso}</Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* MODAL PIN ACESSO  */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalOpcaoVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalOpcaoVisible(!modalOpcaoVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Pin Acesso</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <BarCodeGenerator value={recipe.pinOpcao} formato="CODE128" />
              <Text>{recipe.pinOpcao}</Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalOpcaoVisible(!modalOpcaoVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* MODAL PIN ACESSO  */}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    height: "84%",
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default ReceitaDetails;
