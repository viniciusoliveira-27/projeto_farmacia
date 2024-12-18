import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    // Coleção Array que vai armazenar os objetos Conta (simulando o BD)
    private listaProdutos = new Array<Produto>();

    // Controlas os numeros dos produtos
    public numero: number = 0;


    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log("O Produto foi cadastrado com sucesso!")

    }

    listarTodosProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    procuraPorId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null)
            buscaProduto.visualizar()
        else
            console.log("\nProduto não encontrada")
    }

    atualizarProduto(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("O Produto foi atualizada com sucesso!");
        } else
            console.log("\nProduto não encontrada")
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("O Produto foi deletado com sucesso!");
        } else
            console.log("\nProduto não encontrada")
    }

    //metodos auxiliares

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === numero)
                return produto;
        }

        return null;
    }


}