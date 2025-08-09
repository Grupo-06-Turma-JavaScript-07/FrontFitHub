// src/components/categoria/deletarcategoria/DeletarCategoria.tsx
import { useNavigate, useParams } from 'react-router-dom';

function DeletarCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const nomeCategoria = "Nome da Categoria"; // Simulação de nome

    function handleConfirm() {
        alert(`Categoria ${id} deletada com sucesso!`);
        navigate('/categorias');
    }

    return (
        <div className="flex items-center justify-center bg-neutral-900 text-white min-h-[85vh]">
            <div className="bg-neutral-800 p-8 rounded-lg text-center w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Tem certeza que deseja deletar a categoria?</h1>
                <p className="text-4xl font-bold text-yellow-400 font-anton mb-8">{nomeCategoria}</p>
                <div className="flex justify-center gap-4">
                    <button onClick={() => navigate('/categorias')}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded">Não</button>
                    <button onClick={handleConfirm}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">Sim, deletar</button>
                </div>
            </div>
        </div>
    );
}
export default DeletarCategoria;