// src/components/categoria/listarcategorias/ListarCategorias.tsx
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";
import SidebarPersonal from "../../sidebar/SidebarPersonal";
import type Categoria from '../../../model/Categoria';
import { buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function ListarCategorias() {
  // Estado para armazenar a lista de categorias que virá da API.
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Função assíncrona que chama a API.
  async function buscarCategorias() {
    try {
      // O resultado preenche o nosso estado "categorias".
      await buscar('/category', setCategorias, {});
    } catch (error: any) {
      ToastAlerta('Erro ao buscar categorias.', 'erro');
    }
  }

  // O useEffect executa a função buscarCategorias() assim que o componente é renderizado.
  useEffect(() => {
    buscarCategorias();
  }, []);

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

          {/* O .map agora usa os dados do estado 'categorias', que vêm da API */}
          {Array.isArray(categorias) && categorias.map(categoria => (
            <div key={categoria.id} className="flex justify-between items-center p-4 border-b border-neutral-700 hover:bg-neutral-700/50">
             
              {/* Usamos 'categoria.category' conforme o nosso Model */}
              <p className="text-lg text-amber-100">{categoria.category}</p>
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