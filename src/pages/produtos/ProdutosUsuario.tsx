// src/pages/produtos/produtosusuario/ProdutosUsuario.tsx
import { Link, useParams } from 'react-router-dom';
import CardProdutos from '../../components/produtos/cardProdutos.tsx/CardProdutos'; 
import Sidebar from '../../components/sidebar/Sidebar';

function ProdutosUsuario() {
  const {  } = useParams<{ id: string }>();

  // Simulação de dados
  const nomeCategoria = 'Superiores'; 
  const mockProdutos = [
    { id: 1, nome: 'Supino Reto' },
    { id: 2, nome: 'Elevação Lateral' },
    { id: 3, nome: 'Rosca Direta' },
    { id: 4, nome: 'Tríceps Corda' },
  ];

  return (
    <div className="flex bg-neutral-900 text-white min-h-[85vh]">
      <Sidebar />

      <main className="flex-1 p-8 grid grid-cols-3 gap-8">
        {/* Área principal com os Cards de Produto */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8">
            {nomeCategoria.toUpperCase()} - ESCOLHA O TREINO
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProdutos.map((produto) => (
              // Verifique se as props do seu CardProdutos correspondem a "produto={produto}"
              <CardProdutos key={produto.id} produto={produto} /> 
            ))}
          </div>
        </div>

        {/* Sidebar da Direita com a lista de produtos */}
        <aside className="col-span-1 bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-6">
            Lista de Treinos
          </h2>
          <ul className="space-y-4">
            {mockProdutos.map((produto) => (
              <li key={produto.id} className="text-amber-100 hover:text-yellow-400 cursor-pointer">
                {/* O Link aqui leva para o detalhe do produto */}
                <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default ProdutosUsuario;