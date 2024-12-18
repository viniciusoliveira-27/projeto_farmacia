import { Produto } from "../model/Produto";

export interface ProdutoRepository {

        //Metodos CRUD (Create, Read, Update, e Delete)
        cadastrarProduto(produto: Produto): void;
        listarTodosProdutos(): void;
        procuraPorId(id: number): void;
        atualizarProduto(produto: Produto): void;
        deletar(id: number): void;


}