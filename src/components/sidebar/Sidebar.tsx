import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext'; 

function Sidebar() {
  const { usuario } = useAppContext();

  return (
    <aside className="w-64 bg-neutral-800 text-white flex flex-col p-4 shadow-lg">
      <div className="flex flex-col items-center mb-8">
        {/*A imagem usa a foto do usuário, com uma imagem padrão de reserva */}
        <img 
          src={usuario.foto || "https://ik.imagekit.io/2zvbvzaqt/usuario.png"} 
          alt="Foto do usuário" 
          className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover" 
        />
       
        <h3 className="mt-4 font-bold text-lg">{usuario.nome}</h3>
      </div>

      <nav className="flex flex-col gap-4 text-lg">
        <Link to="/home" className="px-2 py-1 rounded hover:bg-neutral-700 transition-colors">Home</Link>
        <Link to="/perfil" className="px-2 py-1 rounded hover:bg-neutral-700 transition-colors">Meu Perfil</Link>
        <Link to="/categorias" className="px-2 py-1 rounded hover:bg-neutral-700 transition-colors">
            Meus Treinos
        </Link>
      </nav>

      <div className="mt-auto flex justify-center p-4">
        <img 
            src="https://media.discordapp.net/attachments/1374009340561981542/1403028110873727046/logo-empregadeverde1.png?ex=68960f40&is=6894bdc0&hm=9fff371d75d60db61ac2b4a93798faec80d8e5cfb889e90004bbe0e561665516&=&format=webp&quality=lossless&width=280&height=280"
            alt="Logo FitHub"
            className="w-16"
        />
      </div>
    </aside>
  );
}

export default Sidebar;