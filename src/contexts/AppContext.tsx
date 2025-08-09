// src/contexts/AppContext.tsx
import { createContext, type ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define o que nosso contexto vai oferecer
interface AppContextProps {
  isLoggedIn: boolean;
  userRole: 'user' | 'personal' | null;
  login(role: 'user' | 'personal'): void;
  logout(): void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'personal' | null>(null);

  // Função de login que define o tipo de usuário e redireciona
  function login(role: 'user' | 'personal') {
    setIsLoggedIn(true);
    setUserRole(role);
    if (role === 'user') {
      navigate('/perfil');
    } else {
      navigate('/perfilpersonal');
    }
  }

  // Função de logout que reseta o estado e volta para o login
  function logout() {
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/login');
  }

  return (
    <AppContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}