import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/favicon.png")} style={styles.logo} />
      <Text style={styles.titulo}>Login</Text>
      <View style={styles.inputsContainer}>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput 
            style={styles.inputs}
            placeholder="Digite seu Email"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputs}
            placeholder="Digite sua Senha"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.btn}   onPress={() =>
              navigation.navigate("Home", { name:"Home" })}   > 
          <Text style={styles.btnTexto}>Acessar</Text>
        </TouchableOpacity>
        <View style={styles.contasContainer}>
          <Text>Não possui conta?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Register", { name:"Registro" })
            }
            
        
          >
           <Text style={styles.register}>Registro</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
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

export default Login;
