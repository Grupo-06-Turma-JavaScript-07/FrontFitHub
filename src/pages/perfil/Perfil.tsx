import Dashboard from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAppContext } from "../../contexts/AppContext"; 
function Perfil() {
  
  const { usuario } = useAppContext();

  return (
    <div className="flex bg-neutral-900 text-white min-h-[85vh]">
      <Sidebar />
      <main className="flex-1 p-8">
      
        <h1 className="text-4xl font-bold text-yellow-400 font-anton">
            BEM VINDO, {usuario.nome?.toUpperCase()}!
        </h1>
        <p className="text-amber-100 mb-8">Acompanhe aqui sua evolução e seu progresso.</p>
        <Dashboard />
      </main>
    </div>
  );
}

export default Perfil;