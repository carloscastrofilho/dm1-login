// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import Home from "../pages/Home";
import FichaUsuario from "../pages/FichaUsuario";
import Register from "../pages/register";

// telas disponivel na rota

//
// tab menu
const Tab = createBottomTabNavigator();

const SairPrograma = () => {
//   signOut(auth);
};

const TabNavigation: React.FC = ({navigation}) => (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#fff",
        // tabBarActiveBackgroundColor: '#fff',
        paddingBottom: 5,
        paddingTop: 5,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "início",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Registro" component={Register} />
      <Tab.Screen name="ficha" component={FichaUsuario} />
      <Tab.Screen
        name="Sair"
        component={SairPrograma}
        options={{
          tabBarLabel: "início",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="exit" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
);


export default TabNavigation;