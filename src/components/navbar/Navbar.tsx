// src/components/navbar/Navbar.tsx
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext'; // Importar nosso contexto

function Navbar() {
  const { isLoggedIn, userRole, logout } = useContext(AppContext);

  // Define os links que serão exibidos
  let navLinks;

  if (isLoggedIn) {
    // Se estiver logado
    navLinks = (
      <ul className="flex items-center gap-6 font-bold uppercase">
        <li><Link to="/home" className="hover:text-yellow-400">Home</Link></li>
        
        {/* Link condicional para o perfil correto */}
        {userRole === 'user' ? (
          <li><Link to="/perfil" className="hover:text-yellow-400">Meu Perfil</Link></li>
        ) : (
          <li><Link to="/perfilpersonal" className="hover:text-yellow-400">Painel do Personal</Link></li>
        )}

        <li>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Sair
          </button>
        </li>
      </ul>
    );
  } else {
    // Se estiver deslogado
    navLinks = (
      <ul className="flex items-center gap-6 font-bold uppercase">
        <li><Link to='/home' className="hover:text-yellow-400">Home</Link></li>
        <li><Link to='/login' className="hover:text-yellow-400">Login</Link></li>
        <li><Link to='/cadastro' className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">Cadastre-se</Link></li>
      </ul>
    );
  }

  return (
    <div className="w-full bg-neutral-900 p-4 text-amber-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home">
          <img src="https://media.discordapp.net/attachments/1374009340561981542/1403028110873727046/logo-empregadeverde1.png?ex=68960f40&is=6894bdc0&hm=9fff371d75d60db61ac2b4a93798faec80d8e5cfb889e90004bbe0e561665516&=&format=webp&quality=lossless&width=280&height=280" alt="Logo FitHub" className="w-10 h-10" />
        </Link>
        {navLinks}
      </div>
    </div>
  );
}

export default Navbar;