import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import { AuthProvider } from './src/contexts/auth';
import { StatusBar } from 'expo-status-bar';
import { PersonProvider } from './src/contexts/person';

export default function App() {
  return (
    <NavigationContainer> 
       <AuthProvider>
          <PersonProvider>
            <Routers />
            <StatusBar style='auto' />
          </PersonProvider>
      </AuthProvider>       
    </NavigationContainer>    
  );
}
