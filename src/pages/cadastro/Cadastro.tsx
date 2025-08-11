import { type ChangeEvent, type FormEvent, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import type Usuario from '../../model/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { useAppContext } from '../../contexts/AppContext'; 
import { ToastAlerta } from '../../utils/ToastAlerta';

import './Cadastro.css';

function Cadastro() {
    const navigate = useNavigate();
    
    const { handleCadastro } = useAppContext(); 

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        weight: 0,
        height: 0,
    });

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha !== usuario.senha || usuario.senha.length < 8) {
            ToastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
            return;
        }

        setIsLoading(true);

        try {
            await cadastrarUsuario(`/user`, usuario, (usuarioCadastrado: Usuario) => {
                ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
                handleCadastro(usuarioCadastrado, 'user');
            });
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Erro ao cadastrar o usuário.';
            ToastAlerta(errorMessage, 'erro');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <div className="fundoCadastro hidden lg:block"></div>
            <form
                className="flex justify-center items-center flex-col w-2/3 gap-3"
                onSubmit={cadastrarNovoUsuario}
            >
                <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text" id="nome" name="nome" placeholder="Nome Completo"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome} onChange={atualizarEstado} required
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">Email (usuário)</label>
                    <input
                        type="email" id="usuario" name="usuario" placeholder="exemplo@email.com"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.usuario} onChange={atualizarEstado} required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="weight">Peso (kg)</label>
                        <input type="number" step="0.1" id="weight" name="weight" placeholder="Ex: 70.5"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.weight || ''} onChange={atualizarEstado}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="height">Altura (m)</label>
                        <input type="number" step="0.01" id="height" name="height" placeholder="Ex: 1.75"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.height || ''} onChange={atualizarEstado}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="foto">URL da Foto</label>
                    <input
                        type="text" id="foto" name="foto" placeholder="Link da sua foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto} onChange={atualizarEstado}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password" id="senha" name="senha" placeholder="Mínimo de 8 caracteres"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha} onChange={atualizarEstado} required
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input
                        type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={confirmaSenha} onChange={handleConfirmarSenha} required
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button
                        type="button" onClick={() => navigate('/login')}
                        className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded text-black bg-yellow-400 hover:bg-yellow-500 w-1/2 py-2 flex justify-center"
                    >
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" width="24" /> : <span>Cadastrar</span>}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;