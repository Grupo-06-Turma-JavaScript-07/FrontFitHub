// src/pages/perfilpersonal/PerfilPersonal.tsx
import BotaoGerenciamento from '../../components/botaogerenciamento/BotaoGerenciamento';
import SidebarPersonal from '../../components/sidebar/SidebarPersonal';

function PerfilPersonal() {
    

    return (
        <div className="flex bg-neutral-900 text-white min-h-[85vh]">
            <SidebarPersonal />

            <main className="flex-1 p-8 grid grid-cols-3 gap-8">
                {/* Área Central com os Botões de Gerenciamento */}
                <div className="col-span-2 flex flex-col items-center justify-center gap-10">
                    <BotaoGerenciamento to="/categorias/gerenciar" label="Gerenciar Categorias" />
                    <BotaoGerenciamento to="/produtos/gerenciar" label="Gerenciar Produtos" />
                </div>

               
            </main>
        </div>
    );
}

export default PerfilPersonal;