import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
    <>

      < section className="w-full bg-neutral-900 py-20 px-8 relative pb-20" >
        <div id="sobrenos" className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">SOBRE NÓS</h2>
          {/* Container para as fotos dos DEVs */}
          <div className="flex flex-col items-center gap-y-10 mb-16">
            {/* Fileira de cima (3 DEVs) */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-500 rounded-full">
                  <img src="https://ik.imagekit.io/pedrolazzz/Juliana_Freddi_2_1.jpg?updatedAt=1754919604935"
                    alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-bold text-amber-100">Juliana Freddi</p>
                <p className=" text-amber-100">Dev Fullstack que ama debugar</p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/juliana-freddi/" target="_blank" className="relative group">
                    <LinkedinLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 right-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">linkedin</span>
                  </a>

                  <a href="https://github.com/ddifreju" target="_blank" className="relative group">
                    <GithubLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 left-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">github</span>
                  </a>
                </div>

              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-500 rounded-full">
                  <img src="https://ik.imagekit.io/pedrolazzz/Larissa.jpg?updatedAt=1754919604772"
                    alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-bold text-amber-100">Larissa Santana</p>
                <p className=" text-amber-100">Dev Fullstack que ama viajar</p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/larissa-santana-a0b9a02b7/" target="_blank" className="relative group">
                    <LinkedinLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 right-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">linkedin</span>
                  </a>

                  <a href="https://github.com/Santana-larissa" target="_blank" className="relative group">
                    <GithubLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 left-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">github</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-500 rounded-full">
                  <img src="https://ik.imagekit.io/pedrolazzz/perfil20quadrado.jpg?updatedAt=1754919604936"
                    alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-bold text-amber-100">Ludmily Oliveira</p>
                <p className=" text-amber-100">Dev Fullstack e fitness girl</p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/ludmily-oliveira/" target="_blank" className="relative group">
                    <LinkedinLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 right-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">linkedin</span>
                  </a>

                  <a href="https://github.com/LudmilyS" target="_blank" className="relative group">
                    <GithubLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 left-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">github</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Fileira de baixo (2 DEVs) */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-500 rounded-full">
                  <img src="https://ik.imagekit.io/pedrolazzz/Untitled-1.png?updatedAt=1754571230256"
                    alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-bold text-amber-100">Matheus Schneider</p>
                <p className=" text-amber-100">Dev Fullstack que ama girar cubos</p>
                <div className="flex gap-2">
                  <a href="https://linkedin.com/in/matheusschneider" target="_blank" className="relative group">
                    <LinkedinLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 right-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">linkedin</span>
                  </a>

                  <a href="https://github.com/matheusschneider1" target="_blank" className="relative group">
                    <GithubLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 left-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">github</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-500 rounded-full">
                  <img src="https://ik.imagekit.io/pedrolazzz/Pedro%20Elias%20%20(3).jpg?updatedAt=1754566149442"
                    alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-bold text-amber-100">Pedro Elias</p>
                <p className=" text-amber-100">Dev Fullstack que ama pokémon</p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/pedro-elias-4b5ab4181" target="_blank" className="relative group">
                    <LinkedinLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 right-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">linkedin</span>
                  </a>

                  <a href="https://github.com/pedro-eliasd" target="_blank" className="relative group">
                    <GithubLogoIcon className="text-yellow-400" size={30} weight="regular" />
                    <span className="text-xs absolute -top-3 left-7 bg-yellow-400/60 p-1 rounded hidden group-hover:block">github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="flex justify-center bg-yellow-400  text-neutral-900">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            FitHub Monitoramento Fitness
          </p>
          <p className="text-lg">Conheça nossos serviços!</p>

        </div>
      </div>


    </>


  )
}

export default Footer

// {/* ONDA DECORATIVA PARA O RODAPÉ */}
//                     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//                         <svg
//                             className="relative block w-full h-[75px] rotate-180" // altura da onda
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 1200 120"
//                             preserveAspectRatio="none"
//                         >
//                             {/*cor da onda*/}
//                             <path
//                                 d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//                                 className="fill-[#eef0ee]"
//                             ></path>
//                         </svg>
//                     </div>
