// src/pages/perfil/Perfil.tsx
import Dashboard from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/sidebar/Sidebar";

function Perfil() {
    return (
        // Usamos flexbox para alinhar a sidebar e o conteúdo principal lado a lado
        <div className="flex bg-neutral-900 text-white min-h-[85vh]">
            <Sidebar />

            <main className="flex-1 p-8">
                <h1 className="text-4xl font-bold text-yellow-400 font-anton">
                    BEM VINDO, USUÁRIO!
                </h1>
                <p className="text-amber-100 mb-8">Acompanhe aqui sua evolução e seu progresso.</p>

                {/* O Dashboard vai conter os cards de IMC e o gráfico */}
                <Dashboard />
            </main>
        </div>
    );
}

export default Perfil;