import Login from "../pages/login.js";
import Register from "../pages/register.js";
import Home from "../pages/Home.js";
import Splash from "../pages/Splash.js";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
  );
}



export default StackNavigation;