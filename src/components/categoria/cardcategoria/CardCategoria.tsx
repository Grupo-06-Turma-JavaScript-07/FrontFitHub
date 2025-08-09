import { Link } from 'react-router-dom';

interface CardCategoriaProps {
  categoria: {
    id: number;
    nome: string;
  };
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    // O Link vai englobar todo o card, tornando-o clicável.
    // A rota será dinâmica no futuro, baseada no ID ou nome da categoria.
   <Link to={`/produtos/categoria/${categoria.id}`} className="block">
      <div className="
        bg-yellow-400 text-black font-bold uppercase text-2xl 
        flex justify-center items-center h-32 rounded-lg 
        shadow-lg shadow-black/30 transform hover:-translate-y-1 
        transition-all duration-300 ease-in-out cursor-pointer
        font-anton
      ">
        {categoria.nome}
      </div>
    </Link>
  );
}

export default CardCategoria;