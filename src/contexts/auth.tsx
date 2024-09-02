import React, { useState } from "react";
import { createContext } from "react";

interface User {
  // Defina as propriedades do usuário aqui
  // Por exemplo: id: number; name: string;
  nome: string;
  email: string;
  telefone: string;
  ra: string;
  curso: string;
  turno: string;
  diaDaSemana: string;
  avatar: string;
}

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object | null;
  }

const AuthContext = createContext<AuthContextData>({} as  AuthContextData);

// const AuthContext = createContext({ signed: true });
export const AuthProvider: React.FC = ( { children }) => {

  // const [user, setUser] = useState( object | null>(null));
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  return (
    <AuthContext.Provider value={{ signed:  false, token:  'sadfas  asd asda sd112646', user}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;