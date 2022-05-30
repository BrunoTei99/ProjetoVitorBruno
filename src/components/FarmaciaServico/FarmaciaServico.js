import React, { useCallback } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

const FarmaciaServico = ({ pharmacy }) => {
  const sendTextMessage = useCallback(async (phNumber, message) => {
    const separator = Platform.OS === "ios" ? "&" : "?";
    const url = `sms:${phNumber}${separator}body=${message}`;
    await Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 27, fontWeight: "bold" }}>
        Farmácia de servico
      </Text>
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontSize: 25, fontWeight: "500" }}>{pharmacy.name}</Text>
      </View>
      <View style={styles.rowView}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16 }}>{pharmacy.address}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={"tel: " + pharmacy.phoneNumber}
            onPress={() => {
              Linking.openURL(`tel:${pharmacy.phoneNumber}`);
            }}
            color="green"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    margin: 10,
    padding: 7,
  },
  rowView: {
    marginTop: 4,
    flexDirection: "row",
  },
});

export default FarmaciaServico;
