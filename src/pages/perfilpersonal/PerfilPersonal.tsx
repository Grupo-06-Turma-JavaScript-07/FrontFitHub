// src/pages/perfilpersonal/PerfilPersonal.tsx
import BotaoGerenciamento from '../../components/botaogerenciamento/BotaoGerenciamento';
import SidebarPersonal from '../../components/sidebar/SidebarPersonal';

function PerfilPersonal() {
    // Vamos usar dados estáticos para a lista de alunos por enquanto
    const mockAlunos = ['Fernanda', 'Marcos', 'Daniela', 'Roberto'];

    return (
        <div className="flex bg-neutral-900 text-white min-h-[85vh]">
            <SidebarPersonal />

            <main className="flex-1 p-8 grid grid-cols-3 gap-8">
                {/* Área Central com os Botões de Gerenciamento */}
                <div className="col-span-2 flex flex-col items-center justify-center gap-10">
                    <BotaoGerenciamento to="/categorias/gerenciar" label="Gerenciar Categorias" />
                    <BotaoGerenciamento to="/produtos/gerenciar" label="Gerenciar Produtos" />
                </div>

                {/* Sidebar da Direita com a Lista de Alunos */}
                <aside className="col-span-1 bg-neutral-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton mb-6">
                        Lista de Alunos
                    </h2>
                    <ul className="space-y-4 text-lg">
                        {mockAlunos.map((aluno, index) => (
                            <li key={index} className="text-amber-100 p-2 rounded hover:bg-neutral-700 cursor-pointer">
                                {aluno}
                            </li>
                        ))}
                    </ul>
                </aside>
            </main>
        </div>
    );
}

export default PerfilPersonal;