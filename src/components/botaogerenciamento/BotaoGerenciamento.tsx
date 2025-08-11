import { Link } from 'react-router-dom';

interface BotaoGerenciamentoProps {
  to: string;
  label: string;
}

function BotaoGerenciamento({ to, label }: BotaoGerenciamentoProps) {
  return (
    <Link
      to={to}
      className="
        bg-yellow-400 text-black font-bold uppercase text-3xl font-anton
        flex justify-center items-center h-40 w-full max-w-md rounded-lg
        shadow-lg shadow-black/30 transform hover:-translate-y-2
        transition-all duration-300 ease-in-out"
    >
      {label}
    </Link>
  );
}

export default BotaoGerenciamento;