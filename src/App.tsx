import { BrowserRouter } from "react-router-dom"
import Principal from "./pages/principal/Principal"
import SobreNos from "./pages/sobrenos/SobreNos"
import Footer from "./components/footer/Footer"
import Produtos from "./pages/produtos/Produtos"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Principal />
      <Produtos />
      <SobreNos />
      <Footer />
    </BrowserRouter>
  )
}

export default App