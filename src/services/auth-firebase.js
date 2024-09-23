import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/database/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import AuthContext from "../contexts/auth";
import { set } from "firebase/database";

export async function LoginUsuario(email, password) {
	// const { setSigned, setUserEmail } = useContext(AuthContext);
	const usuario = await signInWithEmailAndPassword(
		auth,
		email,
		password,
	);
	console.log(usuario);
	// if (usuario) {
	// 	// setSigned( true )
	// 	// setUserEmail( usuario.email)
	// }
	
	return usuario;
}

export async function LogoutUsuaro() {
	auth.signOut();
	// Limpa todo o AsyncStorage
	AsyncStorage.clear()
		.then(() => {
			console.log("AsyncStorage limpo com sucesso!");
		})
		.catch((error) => {
			console.error("Erro ao limpar o AsyncStorage:", error);
		});
}

export async function RegistarUsuario(email, password) {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}
