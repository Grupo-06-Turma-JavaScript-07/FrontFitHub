import type Produtos from "./Produtos"

export default interface Usuario {
  id: number
  nome: string
  usuario: string
  senha: string
  foto: string
  weight: number; 
  height: number; 
  imc: number; 
//   talvez compensa apagar o imc
  product?: Produtos[] | null
}