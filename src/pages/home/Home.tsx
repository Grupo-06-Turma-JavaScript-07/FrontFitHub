// src/pages/home/Home.tsx
import Principal from "../principal/Principal";
import SobreNos from "../sobrenos/SobreNos";
import Produtos from "../produtos/Produtos";
import Equipe from "../sobre/Equipe";

function Home() {
    return (
        <>
            <Principal />

          
            <div id="produtos">
                <Produtos />
            </div>

            
            <div id="sobrenos">
                <SobreNos />
            </div>

             <div id="equipe">
                <Equipe/>
            </div>
        </>
    );
}

export default Home;