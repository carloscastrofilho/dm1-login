import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';

export default function App() {
  return (
    <NavigationContainer> 
       <Routers />
    </NavigationContainer>    
  );
}
