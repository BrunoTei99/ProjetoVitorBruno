import { StyleSheet, View } from "react-native";

import MapView from "react-native-maps";
const MapViewComponent = () => {
  return (
    <MapView
      region={{
        latitude: 41.2959,
        longitude: -7.74635,
        latitudeDelta: 0.002,
        longitudeDelta: 0.001,
      }}
      style={{ height: "45%", width: "100%", marginBottom: 10 }}
    >
      <MapView.Marker
        coordinate={{ latitude: 41.2959, longitude: -7.74635 }}
        title={"Almeida"}
        description={"farmacia"}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default MapViewComponent;
