// src/contexts/AppContext.tsx
import { createContext, type ReactNode, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import type Usuario from '../model/Usuario';
import { login as loginService } from '../services/Service';
import { ToastAlerta } from '../utils/ToastAlerta';
import type UsuarioLogin from '../model/UsuarioLogin';

interface AppContextProps {
  usuario: Usuario;
  userRole: 'user' | 'personal' | null;
  handleLogin(usuarioLogin: UsuarioLogin, role: 'user' | 'personal'): Promise<void>;
  handleLogout(): void;
  isLoading: boolean;
  handleCadastro(usuario: Usuario, role: 'user' | 'personal'): void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: AppProviderProps) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);


  const [userRole, setUserRole] = useState<'user' | 'personal' | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin, role: 'user' | 'personal') {
    setIsLoading(true);
    try {

      await loginService(`/user/logar`, usuarioLogin, (usuarioLogado: Usuario) => {
        setUsuario(usuarioLogado);
        setUserRole(role);
      });

      ToastAlerta("Usuário logado com sucesso!", "sucesso");

      if (role === 'user') {
        navigate('/perfil');
      } else {
        navigate('/perfilpersonal');
      }

    } catch (error) {
      console.log(error);
      ToastAlerta("Dados do usuário inconsistentes.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleCadastro(usuarioCadastrado: Usuario, role: 'user' | 'personal') {
    setUsuario(usuarioCadastrado);
    setUserRole(role);
    if (role === 'user') {
      navigate('/perfil');
    } else {
      navigate('/perfilpersonal');
    }
  }

  function handleLogout() {
    setUsuario({} as Usuario);

    setUserRole(null);
    navigate('/login');
  }

  return (

    <AppContext.Provider value={{ usuario, userRole, handleLogin, handleLogout, isLoading, handleCadastro }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}