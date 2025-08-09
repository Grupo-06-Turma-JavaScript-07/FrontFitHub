// src/components/produtos/formularioproduto/FormularioProduto.tsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FormularioProdutos() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const pageTitle = id ? 'Editar Produto' : 'Cadastrar Produto';
    const buttonLabel = id ? 'Salvar Alterações' : 'Cadastrar';
    const mockCategorias = [{ id: 1, nome: "Superiores" }, { id: 2, nome: "Inferiores" }];

    const [produtos, setProdutos] = useState({
        nome: '', descricao: '', execucao: '', tempoPausa: '', categoriaId: ''
    });

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setProdutos({ ...produtos, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Produtos "${produtos.nome}" ${id ? 'atualizado' : 'cadastrado'}!`);
        navigate('/produtos/gerenciar');
    }

    return (
        <div className="flex items-center justify-center bg-neutral-900 text-white p-8 min-h-[85vh]">
            <form className="bg-neutral-800 p-8 rounded-lg w-full max-w-2xl" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8 text-center">{pageTitle}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="nome" className="block text-amber-100 font-bold mb-2">Nome do Exercício</label>
                        <input type="text" name="nome" value={produtos.nome} onChange={atualizarEstado} className="w-full p-3 bg-neutral-700 rounded" required />
                    </div>
                    <div>
                        <label htmlFor="categoriaId" className="block text-amber-100 font-bold mb-2">Categoria</label>
                        <select name="categoriaId" value={produtos.categoriaId} onChange={atualizarEstado} className="w-full p-3 bg-neutral-700 rounded" required>
                            <option value="" disabled>Selecione uma categoria</option>
                            {mockCategorias.map(cat => <option key={cat.id} value={cat.id}>{cat.nome}</option>)}
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="descricao" className="block text-amber-100 font-bold mb-2">Descrição Detalhada</label>
                    <textarea name="descricao" value={produtos.descricao} onChange={atualizarEstado} className="w-full p-3 bg-neutral-700 rounded" rows={3}></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="execucao" className="block text-amber-100 font-bold mb-2">Execução Correta</label>
                    <textarea name="execucao" value={produtos.execucao} onChange={atualizarEstado} className="w-full p-3 bg-neutral-700 rounded" rows={3} required></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="tempoPausa" className="block text-amber-100 font-bold mb-2">Tempo de Pausa</label>
                    <input type="text" name="tempoPausa" value={produtos.tempoPausa} onChange={atualizarEstado} className="w-full p-3 bg-neutral-700 rounded" placeholder="Ex: 60 segundos" required />
                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => navigate('/produtos/gerenciar')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">{buttonLabel}</button>
                </div>
            </form>
        </div>
    );
}
export default FormularioProdutos;