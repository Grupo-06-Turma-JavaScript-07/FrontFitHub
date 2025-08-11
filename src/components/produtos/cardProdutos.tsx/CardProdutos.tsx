import { Link } from 'react-router-dom';
import type Produtos from '../../../model/Produtos';

interface CardProdutosProps {
  produto: Produtos;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <Link to={`/produtos/${produto.id}`} className="block">
      <div className="
        bg-yellow-400 text-black font-bold uppercase text-2xl 
        flex justify-center items-center h-32 rounded-lg 
        shadow-lg shadow-black/30 transform hover:-translate-y-1 
        transition-all duration-300 ease-in-out cursor-pointer
        font-anton
      ">
        {produto.name}
      </div>
    </Link>
  );
}

export default CardProdutos;