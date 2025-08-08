// import type { ReactNode } from "react";
import { Link } from "react-scroll";


function Navbar() {
    return (
        <div className="w-full bg-neutral-900 p-4  text-amber-100 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo clicável*/}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                >
                    <img src="https://media.discordapp.net/attachments/1374009340561981542/1403028110873727046/logo-empregadeverde1.png?ex=68960f40&is=6894bdc0&hm=9fff371d75d60db61ac2b4a93798faec80d8e5cfb889e90004bbe0e561665516&=&format=webp&quality=lossless&width=280&height=280"
                        alt="Logo Empregadev"
                        className="w-10 h-10"
                    />
                </Link>

                {/* Links que rolam a página*/}
                <ul className="flex gap-4 font-bold">
                    <li>
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='produtos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='sobrenos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Sobre Nós
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

