// src/components/produtos/listarprodutos/ListarProdutos.tsx
import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";
import SidebarPersonal from "../../sidebar/SidebarPersonal";

function ListarProdutos() {
    // Dados estáticos para simular os produtos
    const mockProdutos = [
        { id: 1, nome: "Supino Reto", categoria: "Superiores" },
        { id: 2, nome: "Agachamento Livre", categoria: "Inferiores" },
        { id: 3, nome: "Corrida na Esteira", categoria: "Cardio" },
    ];

    return (
        <div className="flex bg-neutral-900 text-white min-h-[85vh]">
            <SidebarPersonal />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-yellow-400 font-anton">
                        GERENCIAR PRODUTOS
                    </h1>
                    <Link 
                        to="/cadastrarproduto" 
                        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                    >
                        Cadastrar Novo Produto
                    </Link>
                </div>

                <div className="bg-neutral-800 rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-neutral-700 text-amber-100 uppercase">
                            <tr>
                                <th className="p-4">Produto</th>
                                <th className="p-4">Categoria</th>
                                <th className="p-4 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockProdutos.map(produto => (
                                <tr key={produto.id} className="border-b border-neutral-700 hover:bg-neutral-700/50">
                                    <td className="p-4">{produto.nome}</td>
                                    <td className="p-4">{produto.categoria}</td>
                                    <td className="p-4">
                                        <div className="flex justify-center gap-4">
                                            <Link to={`/editarproduto/${produto.id}`} className="text-blue-400 hover:text-blue-300">
                                                <Pencil size={24} />
                                            </Link>
                                            <Link to={`/deletarproduto/${produto.id}`} className="text-red-500 hover:text-red-400">
                                                <Trash size={24} />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default ListarProdutos;