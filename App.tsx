import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider> 
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;