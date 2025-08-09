// src/pages/login/Login.tsx
import { useContext, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext'; // Importar nosso novo contexto
import './Login.css';

function Login() {
  const { login } = useContext(AppContext);
  const [role, setRole] = useState<'user' | 'personal'>('user'); // Estado para guardar a seleção

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(role); // Chama a função de login do contexto com o perfil selecionado
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={handleLogin}>
        <h2 className="text-slate-900 text-5xl">Faça seu Login</h2>
        
        {/* SELEÇÃO DE PERFIL */}
        <div className="flex gap-6 my-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="user" checked={role === 'user'} onChange={() => setRole('user')} className="h-5 w-5"/>
            Sou Usuário
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="personal" checked={role === 'personal'} onChange={() => setRole('personal')} className="h-5 w-5"/>
            Sou Personal
          </label>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Email</label>
          <input type="email" id="usuario" name="usuario" placeholder="exemplo@email.com"
            className="border-2 border-slate-700 rounded p-2" required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Sua senha"
            className="border-2 border-slate-700 rounded p-2" required />
        </div>
        <button type="submit" className="rounded bg-yellow-400 flex justify-center hover:bg-yellow-500 text-black w-1/2 py-2">
          Entrar
        </button>

        <hr className="border-slate-800 w-full" />
        <p>Ainda não tem uma conta? <Link to="/cadastro" className="text-yellow-400 hover:underline">Cadastre-se</Link></p>
      </form>
      <div className="fundoLogin hidden lg:block"></div>
    </div>
  );
}

export default Login;