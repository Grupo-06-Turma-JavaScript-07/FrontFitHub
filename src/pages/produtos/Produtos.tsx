function Produtos() {
    return (
        <section className="w-full bg-neutral-900 py-40 px-4">
            <h2 className="text-4xl lg:text-5xl my font-bold uppercase text-yellow-400 font-anton text-center">
                O que oferecemos?
            </h2>

            <h4 className="text-1xl lg:text-1xl my-15 text-amber-100 font-anton text-center mt-7 mb-8">
                Estamos empenhados em trazer a melhor experiência e treino.
            </h4>
            <div className="flex justify-center mt-8 md:mt-12 lg:mt-20">

                <div className="grid md:grid-cols-3 gap-10 text-center">

                    {/* --- CARD 1: CADASTRO DE TREINOS --- */}
                    <div
                        className="
                        sombra hover:-translate-y-2 transition duration-300 ease-in-out 
                        flex flex-col justify-center items-center w-75 h-80 bg-cover bg-center 
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://i.imgur.com/GUaFesV.jpeg')]
                    "
                    >
                        <h3 className="text-2xl font-bold uppercase text-white [text-shadow:2px_2px_2px_rgba(0,0,0,0.7)]">
                            Cadastro de Treinos
                        </h3>
                    </div>

                    {/* --- CARD 2: CÁLCULO DE IMC --- */}
                    <div
                        className="
                        sombra hover:-translate-y-2 transition duration-300 ease-in-out 
                        flex flex-col justify-center items-center w-75 h-80 bg-cover bg-center 
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://i.imgur.com/Qu6lzOG.jpeg')]
                    "
                    >
                        <h3 className="text-2xl font-bold uppercase text-white [text-shadow:2px_2px_2px_rgba(0,0,0,0.7)]"> {/* Alteração: Estilo do texto ajustado para a imagem de fundo */}
                            Cálculo de IMC
                        </h3>
                    </div>

                    {/* --- CARD 3: MONITORAMENTO DE TREINOS --- */}
                    <div
                        className="
                        sombra hover:-translate-y-2 transition duration-300 ease-in-out 
                        flex flex-col justify-center items-center w-75 h-80 bg-cover bg-center 
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://ik.imagekit.io/pedrolazzz/closeup-de-atleta-feminina-usando-telefone-celular-enquanto-verifica-frequencia-cardiaca-no-relogio-de-pulso.jpg?updatedAt=1754672570474')]
                    "
                    >
                        <h3 className="text-2xl font-bold uppercase text-white [text-shadow:2px_2px_2px_rgba(0,0,0,0.7)]">
                            Monitoramento de Treinos
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Produtos;