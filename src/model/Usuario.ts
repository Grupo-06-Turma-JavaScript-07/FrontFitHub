import type Produtos from "./Produtos"

export default interface Usuario {
  id: number
  name: string
  usuario: string
  senha: string
  foto: string
  weight: number; 
  height: number; 
  product?: Produtos[] | null
}