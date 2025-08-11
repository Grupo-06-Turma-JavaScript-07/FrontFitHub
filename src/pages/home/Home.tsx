// src/pages/home/Home.tsx
import Principal from "../principal/Principal";
import SobreNos from "../sobrenos/SobreNos";
import Produtos from "../produtos/Produtos";

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
        </>
    );
}

export default Home;