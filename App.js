import { StatusBar } from "expo-status-bar";
import Login from "./src/pages/login.js";
import Register from "./src/pages/register.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>  {/* Container de navegação */}
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{title: 'Login Acesso'}}
      />
      <Stack.Screen 
      name="Registro" 
      component={Register}
      options={{title: 'Registro Acesso'}}
       />
             
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;