import { createContext } from "react";

const AuthContext = createContext({});

export function AuthPtovider({children}){
    return (
        <AuthContext.Provider value={{
            signed: true, 
            name:"aula-fatec", 
            email: "auladsmi@fatectq.edu.br"}} >
                {children}
        </AuthContext.Provider>       
    )
}

export default AuthContext;