
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/favicon.png")} style={styles.logo} />
      <Text style={styles.titulo}>Tela Inicial</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },

  logo: {
    width: 140,
    height: 141,
  },
  titulo: {
    fontSize: 32,
  },
  inputs: {
    width: 300,
    height: 44,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  btn: {
    backgroundColor: "#4169E1",
    display: "flex",
    justifyContent: "center",
    padding: 14,
    borderRadius: 4,
  },
  btnTexto: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  inputsContainer: {
    gap: 20,
  },
  contasContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  register: {
    color: "#4169E1",
  },
});

export default Home;
