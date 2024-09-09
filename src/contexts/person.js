const { createContext } = require("react");

const PersonContext = createContext({});

export const PersonProvider = ({children}) => {
    return(
        <PersonContext.Provider value={{
            name: "jose Silva", 
            telefone: "16-99441-1111",
            email: "aula@fatectq.edu.br",
            cep: "15906-522"}} >
            {children}
        </PersonContext.Provider>
    )
}

export default PersonContext;