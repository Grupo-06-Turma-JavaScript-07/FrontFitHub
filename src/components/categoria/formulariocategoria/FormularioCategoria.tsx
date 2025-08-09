// src/components/categoria/formulariocategoria/FormularioCategoria.tsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FormularioCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const pageTitle = id ? 'Editar Categoria' : 'Cadastrar Categoria';
    const buttonLabel = id ? 'Salvar Alterações' : 'Cadastrar';
    const [nomeCategoria, setNomeCategoria] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Categoria "${nomeCategoria}" ${id ? 'atualizada' : 'cadastrada'}!`);
        navigate('/categorias');
    }

    return (
        <div className="flex items-center justify-center bg-neutral-900 text-white min-h-[85vh]">
            <form className="bg-neutral-800 p-8 rounded-lg w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold text-yellow-400 font-anton mb-8 text-center">{pageTitle}</h1>
                <div className="mb-6">
                    <label htmlFor="nome" className="block text-amber-100 font-bold mb-2">Nome da Categoria</label>
                    <input type="text" id="nome" name="nome" value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)}
                        className="w-full p-3 bg-neutral-700 rounded focus:ring-2 focus:ring-yellow-400" required />
                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => navigate('/categorias')}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">{buttonLabel}</button>
                </div>
            </form>
        </div>
    );
}
export default FormularioCategoria;