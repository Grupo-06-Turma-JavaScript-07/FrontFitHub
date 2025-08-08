import { Link } from "react-scroll";

function Principal() {
    return (

        <>
            {/* // PÁGINA DO HOME */}

            {/* 'relative' para ancorar a onda e 'pb-20' (padding-bottom) para criar espaço para ela */}
            <div id="home">
                <div className="w-full text-slate-800 relative pb-20">
                    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center pt-10">
                        {/* Coluna do texto */}
                        <div className="flex flex-col justify-center items-center text-center gap-y-6">
                            <h2 className="text-4xl font-bold font-serif">Emprega<span className="text-[#5e8d5e]">Dev</span></h2>
                            <p className="text-xl font-roboto">
                                Plataforma de monitoramento e informações dos colaboradores.
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    to='produtos'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="cursor-pointer bg-transparent border-2 border-[#5e8d5e] hover:bg-[#5e8d5e] hover:border-[#5e8d5e] hover:text-white text-[#5e8d5e] font-bold py-2 px-4 rounded"
                                >
                                    Conheça nossos produtos!
                                </Link>
                            </div>
                        </div>
                        {/* Coluna da imagem */}
                        <div>
                            <img
                                src="https://images-ext-1.discordapp.net/external/geDBRq-A3PJ8N4FP11UehRDLJ0A_CGnRSUAYV7tzmeo/https/i.imgur.com/2DdaC93.png?format=webp&quality=lossless&width=586&height=586"
                                alt="Imagem da Página Home"
                                className="w-96"
                            />
                        </div>
                    </div>
                    {/* código da onda no final do container pai */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg
                            className="relative block w-full h-[75px] rotate-180" // Controle a altura da onda aqui
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-[#eef0ee]"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Principal;