import type Produtos from "./Produtos";

export default interface Tema {
  id: number;
  category: string;
  product?: Produtos[] | null;
}