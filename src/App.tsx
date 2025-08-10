// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from './contexts/AppContext';

// --- Componentes de Layout ---
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// --- Páginas Principais e de Autenticação ---
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Perfil from './pages/perfil/Perfil';
import PerfilPersonal from './pages/perfilpersonal/PerfilPersonal';

// --- Componentes da Visão do Usuário ---
import CategoriasUsuario from './pages/categorias/CategoriasUsuario';
import ProdutosUsuario from './pages/produtos/ProdutosUsuario';
import DetalheProdutos from './components/produtos/detalheprodutos/DetalheProdutos';

// --- Componentes da Visão do Personal (Gerenciamento) ---
import ListarCategorias from './components/categoria/listarcategorias/ListarCategorias';
import FormularioCategoria from './components/categoria/formulariocategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos';
import FormularioProdutos from './components/produtos/formularioprodutos/FormularioProdutos';
import DeletarProdutos from './components/produtos/deletarprodutos/DeletarProdutos';


function App() {
  return (
    <>
      <ToastContainer />
      {/* O BrowserRouter deve ser o componente mais externo para prover o contexto de rotas */}
      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              {/* --- Rotas Públicas e de Autenticação --- */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />

              {/* --- Rotas do Usuário Comum --- */}
              <Route path="/home" element={<Home />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/categorias" element={<CategoriasUsuario />} />
              <Route path="/produtos/categoria/:id" element={<ProdutosUsuario />} />
              <Route path="/produtos/:id" element={<DetalheProdutos />} />
              
              {/* --- Rotas do Personal Trainer (Gerenciamento) --- */}
              <Route path="/perfilpersonal" element={<PerfilPersonal />} />
              
              {/* Gerenciamento de Categorias */}
              <Route path="/categorias/gerenciar" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormularioCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

              {/* Gerenciamento de Produtos */}
              <Route path="/produtos/gerenciar" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormularioProdutos />} />
              <Route path="/editarproduto/:id" element={<FormularioProdutos />} />
              <Route path="/deletarproduto/:id" element={<DeletarProdutos />} />
            </Routes>
          </div>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;