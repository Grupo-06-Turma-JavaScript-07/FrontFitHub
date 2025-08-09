// src/components/cards/Cardprodutos.tsx
import { Link } from 'react-router-dom';

// Definindo a estrutura de dados que o Card espera receber
interface CardProdutosProps {
  produto: {
    id: number;
    nome: string;
  };
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    // A rota levará para a página de detalhe daquele produtos específico
    <Link to={`/produtos/${produto.id}`} className="block">
      <div className="
        bg-yellow-400 text-black font-bold uppercase text-2xl 
        flex justify-center items-center h-32 rounded-lg 
        shadow-lg shadow-black/30 transform hover:-translate-y-1 
        transition-all duration-300 ease-in-out cursor-pointer
        font-anton
      ">
        {produto.nome}
      </div>
    </Link>
  );
}

export default CardProdutos;