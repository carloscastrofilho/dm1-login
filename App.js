import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext, { AuthPtovider } from './src/contexts/auth';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer> 
        <AuthPtovider>
          <Routers />
          <StatusBar style="auto" /> 
        </AuthPtovider>  
    </NavigationContainer>    
  );
}
