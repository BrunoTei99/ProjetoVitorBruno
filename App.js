import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//NAVEGACAO
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

import { withAuthenticator } from "aws-amplify-react-native";

//AUTHENTICATION
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/contexts/AuthContext";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
