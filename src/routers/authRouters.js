import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../pages/login";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

export default function AuthRouters(){
   return(
    <Tab.Navigator>
         <Tab.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
        <Tab.Screen 
            name="Login"
            component={Login} 
            options={{title: 'Login'}}
        />
      </Tab.Navigator>
   )
}