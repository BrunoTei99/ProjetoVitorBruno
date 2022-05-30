import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ReceitaDetails from "../screens/ReceitaDetailsScreen/ReceitaDetailsScreen";
import ReceitasListScreen from "../screens/ReceitasListScreen/ReceitasListScreen";
import ProfileScreen from "../screens/ProfileScreen";

//ICONS
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { useAuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <Stack.Navigator>
      {dbUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Receitas" component={ReceitasListScreen} />
          <Stack.Screen name="ReceitaDetails" component={ReceitaDetails} />
        </>
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={ReceitasListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={30} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Profile" /> */}
    </Tab.Navigator>
  );
};

export default RootNavigator;
