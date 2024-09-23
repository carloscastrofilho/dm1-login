const { createContext, useState } = require("react");

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [ signed, setSigned] = useState(false);
    const [ userEmail, setUserEmail ] = useState("")
    return(
        <AuthContext.Provider value={
            {signed: signed, 
              token:"adasdafdafsd134dasd",
              email: userEmail }
            } >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;