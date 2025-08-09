import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Produtos {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  category?: Categoria | null
  user: Usuario | null
}