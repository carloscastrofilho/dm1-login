const { createContext } = require("react");

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{
            signed: true, 
            token:"adasdafdafsd134dasd",
            email: "aula@fatectq.edu.br"}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;