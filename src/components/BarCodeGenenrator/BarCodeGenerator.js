import React from "react";
import { StyleSheet } from "react-native";

import Barcode from "react-native-barcode-expo";

const BarCodeGenerator = ({ value, formato }) => {
  return <Barcode value={value.toString()} format={formato} />;
};

const styles = StyleSheet.create({});

export default BarCodeGenerator;
