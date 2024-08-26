import { StatusBar } from "expo-status-bar";
import Login from "./src/pages/login.js";
import Register from "./src/pages/Register.js";
import Home from "./src/pages/Home.js";
import Splash from "./src/pages/Splash.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const App = () => {
  return (
    <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
       <Stack.Screen 
        name="Login"
        component={Login}
        options={{title:'Login Acesso',
          headerLeft: () => false
        }}
      />
      <Stack.Screen 
      name="Register" 
      component={Register}
      options={{title:'Registro Acesso'}}
       />
    <Stack.Screen 
        name="Home"
        component={Home}
        options={{title:'Tela Inicial'}}
      />
             
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;