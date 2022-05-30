import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ReceitasScreen from "./src/screens/ReceitasScreen/ReceitasScreen";
import Pharmacys from "./assets/Data/pharmacy.json";

export default function App() {
  return (
    <View style={styles.container}>
      {/*   <HomeScreen />
      <ReceitasScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
