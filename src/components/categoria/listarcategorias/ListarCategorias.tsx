// src/components/categoria/listarcategorias/ListarCategorias.tsx
import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";

// OBS: O caminho para a Sidebar pode precisar de ajuste dependendo de onde este arquivo está.
// "../../sidebar/Sidebar" deve funcionar se a pasta sidebar estiver em /components/sidebar
import SidebarPersonal from "../../sidebar/SidebarPersonal";

function ListarCategorias() {
    const mockCategorias = [
        { id: 1, nome: "Superiores" },
        { id: 2, nome: "Inferiores" },
        { id: 3, nome: "Cardio" },
    ];

    return (
        <div className="flex bg-neutral-900 text-white min-h-[85vh]">
            <SidebarPersonal />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-yellow-400 font-anton">
                        GERENCIAR CATEGORIAS
                    </h1>
                    <Link 
                        to="/cadastrarcategoria" 
                        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                    >
                        Cadastrar Nova Categoria
                    </Link>
                </div>

                <div className="bg-neutral-800 p-6 rounded-lg">
                    {mockCategorias.map(categoria => (
                        <div key={categoria.id} className="flex justify-between items-center p-4 border-b border-neutral-700 hover:bg-neutral-700/50">
                            <p className="text-lg text-amber-100">{categoria.nome}</p>
                            <div className="flex gap-4">
                                <Link to={`/editarcategoria/${categoria.id}`} className="text-blue-400 hover:text-blue-300">
                                    <Pencil size={24} />
                                </Link>
                                <Link to={`/deletarcategoria/${categoria.id}`} className="text-red-500 hover:text-red-400">
                                    <Trash size={24} />
                                 </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ListarCategorias;