// src/pages/produtos/DetalheProduto.tsx
// import { CheckCircle } from '@phosphor-icons/react';
import Sidebar from '../../sidebar/Sidebar';

function DetalheProdutos() {
  // No futuro, usaríamos o useParams para pegar o ID do produto da URL
  // e buscar as informações dele na API.
  // const { id } = useParams<{ id: string }>();

  // Por enquanto, vamos usar dados estáticos:
  const produtos = {
    nome: "Supino Reto",
    categoria: "Superiores",
    videoUrl: "https://www.youtube.com/embed/sqOw2Y6uDWQ", // Exemplo de link embed do YouTube
    execucao: "Deite-se no banco com os pés firmes no chão. Pegue a barra com uma pegada um pouco mais larga que os ombros. Abaixe a barra até o peito e depois empurre para cima até a posição inicial.",
    pausa: "60 segundos"
  };

  return (
    <div className="flex bg-neutral-900 text-white min-h-[85vh]">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8">
          {produtos.categoria.toUpperCase()} - {produtos.nome.toUpperCase()}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna do Vídeo e Checkbox */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Container do Vídeo */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={produtos.videoUrl}
                title={`Execução do exercício ${produtos.nome}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Checkbox de Conclusão */}
            <label className="
              flex items-center gap-4 p-4 bg-green-700/50 border-2 
              border-green-500 rounded-lg cursor-pointer hover:bg-green-700/70
              transition-colors duration-300
            ">
              <input type="checkbox" className="hidden" />
              <div className="w-8 h-8 border-2 border-white rounded flex items-center justify-center">
                {/* Futuramente, podemos mostrar o ícone apenas quando clicado */}
                {/* <CheckCircle size={32} weight="fill" className="text-green-400" /> */}
              </div>
              <span className="text-xl font-bold">MARCAR COMO CONCLUÍDO</span>
            </label>
          </div>

          {/* Coluna de Instruções */}
          <aside className="bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-4">
              Execução Detalhada
            </h2>
            <p className="text-amber-100 mb-6">{produtos.execucao}</p>

            <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-4">
              Tempo de Pausa
            </h2>
            <p className="text-amber-100">{produtos.pausa}</p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default DetalheProdutos;