import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardProdutos from '../../components/produtos/cardProdutos.tsx/CardProdutos';
import Sidebar from '../../components/sidebar/Sidebar';
import type Categoria from '../../model/Categoria';
import type Produtos from '../../model/Produtos';
import { buscar } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

function ProdutosUsuario() {
  // O hook useParams nos permite pegar parâmetros da URL, como o ID da categoria
  const { id } = useParams<{ id: string }>();

  // Estado para armazenar a lista de produtos que virá da API
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  // Estado para armazenar o nome da categoria para o título da página
  const [nomeCategoria, setNomeCategoria] = useState('');

  // Função para buscar os produtos no back-end
  async function buscarProdutosPorCategoria() {
    try {
      // Usamos o endpoint para buscar UMA categoria pelo ID
      await buscar(`/category/${id}`, (dados: Categoria) => {
        // Da resposta, pegamos a lista de produtos e o nome da categoria
        setProdutos(dados.product || []); // Usamos "|| []" para garantir que seja sempre uma lista
        setNomeCategoria(dados.category);
      }, {});
    } catch (error: any) {
      ToastAlerta('Erro ao buscar os produtos da categoria.', 'erro');
    }
  }

  // O useEffect chama a função de busca assim que o componente é renderizado
  useEffect(() => {
    if (id !== undefined) {
      buscarProdutosPorCategoria();
    }
  }, [id]);

  return (
    <div className="flex bg-neutral-900 text-white min-h-[85vh]">
      <Sidebar />

      <main className="flex-1 p-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8">
            {/* O título agora é dinâmico */}
            {nomeCategoria.toUpperCase()} - ESCOLHA O TREINO
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* O .map agora usa os dados do estado 'produtos' */}
            {Array.isArray(produtos) && produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
        </div>

        <aside className="col-span-1 bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-6">
            Lista de Treinos
          </h2>
          <ul className="space-y-4">
            {Array.isArray(produtos) && produtos.map((produto) => (
              <li key={produto.id} className="text-amber-100 hover:text-yellow-400 cursor-pointer">
                <Link to={`/produtos/${produto.id}`}>{produto.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default ProdutosUsuario;


// import { Link, useParams } from 'react-router-dom';
// import CardProdutos from '../../components/produtos/cardProdutos.tsx/CardProdutos'; 
// import Sidebar from '../../components/sidebar/Sidebar';

// function ProdutosUsuario() {
//   const {  } = useParams<{ id: string }>();

//   // Simulação de dados
//   const nomeCategoria = 'Superiores'; 
//   const mockProdutos = [
//     { id: 1, nome: 'Supino Reto' },
//     { id: 2, nome: 'Elevação Lateral' },
//     { id: 3, nome: 'Rosca Direta' },
//     { id: 4, nome: 'Tríceps Corda' },
//   ];

//   return (
//     <div className="flex bg-neutral-900 text-white min-h-[85vh]">
//       <Sidebar />

//       <main className="flex-1 p-8 grid grid-cols-3 gap-8">
//         {/* Área principal com os Cards de Produto */}
//         <div className="col-span-2">
//           <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8">
//             {nomeCategoria.toUpperCase()} - ESCOLHA O TREINO
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {mockProdutos.map((produto) => (
//               // Verifique se as props do seu CardProdutos correspondem a "produto={produto}"
//               <CardProdutos key={produto.id} produto={produto} /> 
//             ))}
//           </div>
//         </div>

//         {/* Sidebar da Direita com a lista de produtos */}
//         <aside className="col-span-1 bg-neutral-800 p-6 rounded-lg">
//           <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-6">
//             Lista de Treinos
//           </h2>
//           <ul className="space-y-4">
//             {mockProdutos.map((produto) => (
//               <li key={produto.id} className="text-amber-100 hover:text-yellow-400 cursor-pointer">
//                 {/* O Link aqui leva para o detalhe do produto */}
//                 <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
//               </li>
//             ))}
//           </ul>
//         </aside>
//       </main>
//     </div>
//   );
// }

// export default ProdutosUsuario;