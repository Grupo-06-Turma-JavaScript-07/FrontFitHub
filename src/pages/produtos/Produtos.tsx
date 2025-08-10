function Produtos() {
    return (
        <section className="px-4 md:px-15 py-10 w-full max-w-8xl mx-auto bg-neutral-900">
            <h2 className="text-4xl lg:text-5xl my-15 font-bold uppercase text-yellow-400 font-anton text-center">
                O que oferecemos?
            </h2>

            <h4 className="text-1xl lg:text-1xl my-15 text-amber-100 font-anton text-center">
                Estamos empenhados em trazer a melhor experiência e treino.
            </h4>
            <div className="flex justify-center">

                <div className="grid md:grid-cols-3 gap-10 text-center">

                    {/* --- CARD 1: CADASTRO DE TREINOS --- */}
                    <div
                        className="
                        sombra hover:-translate-y-2 transition duration-300 ease-in-out 
                        flex flex-col justify-center items-center w-75 h-80 bg-cover bg-center 
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images-ext-1.discordapp.net/external/REDeuJlFMpuFndBijs1OgJvTBOnQg_NctmfWcgZAykU/https/i.imgur.com/GUaFesV.jpg?format=webp&width=880&height=586')]
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
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images-ext-1.discordapp.net/external/a1_XgPq0hdsqJ4cKDpcdjBrj1k9-O3xzaY616fg3Dz4/https/i.imgur.com/Qu6lzOG.jpg?format=webp&width=880&height=586')]
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
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images-ext-1.discordapp.net/external/oE0OL2GhhUuhkmECF0QUku07EnVdwcGV1rUDjW4I1jw/%3FupdatedAt%3D1754672570474/https/ik.imagekit.io/pedrolazzz/closeup-de-atleta-feminina-usando-telefone-celular-enquanto-verifica-frequencia-cardiaca-no-relogio-de-pulso.jpg?format=webp&width=880&height=586')]
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