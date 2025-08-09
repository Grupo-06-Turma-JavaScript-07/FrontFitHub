// src/pages/home/Home.tsx
import Principal from "../principal/Principal";
import Produtos from "../produtos/Produtos";
import SobreNos from "../sobrenos/SobreNos";

function Home() {
    return (
        <>
            {/* Este componente agora renderiza todas as seções da sua página principal original */}
            <Principal />
            <Produtos />
            <SobreNos />
        </>
    );
}

export default Home;