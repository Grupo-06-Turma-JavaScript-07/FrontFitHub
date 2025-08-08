import type Produtos from "./Produtos";

export default interface Tema {
  id: number;
  descricao: string;
  produtos?: Produtos[] | null;
}