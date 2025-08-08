import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "./pages/principal/Principal"
import SobreNos from "./pages/sobrenos/SobreNos"
import Footer from "./components/footer/Footer"
import Produtos from "./pages/produtos/Produtos"
import Navbar from "./components/navbar/Navbar"
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
// import ListaTemas from './components/temas/listaTemas/ListaTemas';
// import FormTema from './components/temas/formTema/FormTema';
// import DeletarTema from './components/temas/deletarTema/DeletarTema';
// import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
// import FormPostagem from './components/produtos/formPostagem/FormPostagem';
// import DeletarPostagem from './components/produtos/deletarPostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div className="min-h-[80vh]">
          <Principal />
          <Produtos />
          <SobreNos />
        

           {/* <Routes>
            cada rota tem: Caminho (path), quem abre (element)
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrarTema" element={<FormTema />} />
            <Route path="/editarTema/:id" element={<FormTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarPostagem" element={<FormPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormPostagem />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} /> 
            <Route path='/perfil' element={<Perfil />} />

          </Routes>  */}
        </div>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App