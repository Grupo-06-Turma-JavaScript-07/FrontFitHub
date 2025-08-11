// src/contexts/AppContext.tsx
import { createContext, type ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type Usuario from '../model/Usuario';

// Define o que nosso contexto vai oferecer
interface AppContextProps {
  isLoggedIn: boolean;
  userRole: 'user' | 'personal' | null;

  user: Usuario | null;                    
  setUser: (u: Usuario | null) => void;      

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
  const [user, setUser] = useState<Usuario | null>(null); 

  // Carregar do localStorage com segurança
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('app:user');
      const savedRole = localStorage.getItem('app:role');
      const savedLogged = localStorage.getItem('app:logged');

      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          setUser(parsed);
        } catch {
          // valor inválido -> limpa
          localStorage.removeItem('app:user');
          setUser(null);
        }
      }

      if (savedRole === 'user' || savedRole === 'personal') {
        setUserRole(savedRole);
      } else {
        localStorage.removeItem('app:role');
        setUserRole(null);
      }

      setIsLoggedIn(savedLogged === 'true');
    } catch {
      // em último caso, zera tudo
      setUser(null);
      setUserRole(null);
      setIsLoggedIn(false);
    }
  }, []);

  // Persistir mudanças
  useEffect(() => {
    if (user) localStorage.setItem('app:user', JSON.stringify(user));
    else localStorage.removeItem('app:user');
  }, [user]);

  useEffect(() => {
    if (userRole) localStorage.setItem('app:role', userRole);
    else localStorage.removeItem('app:role');
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('app:logged', String(isLoggedIn));
  }, [isLoggedIn]);

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
    <AppContext.Provider value={{ isLoggedIn, userRole, login, logout, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}