import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, generico, fragancia: string;
    const tipoProduto = ['Medicamento', 'Fragancia'];


    // Criando um objeto da classe ContaController
    const produtos = new ProdutoController();

    // Novas instancias da classe Medicamento
    produtos.cadastrarProduto(new Medicamento(produtos.gerarNumero(), "dipirona", 1, 50, "Original"));
    produtos.cadastrarProduto(new Medicamento(produtos.gerarNumero(), "benegripe", 1, 15, "Generico"));

    // Novas instancias da classe Medicamento
    produtos.cadastrarProduto(new Cosmetico(produtos.gerarNumero(), "Nivea", 2, 35, "Otima"));
    produtos.cadastrarProduto(new Cosmetico(produtos.gerarNumero(), "Leite de rosas", 2, 40, "mais ou menos"));



    console.log("")
    do {

        console.log("************************************************************")
        console.log("\n                   Farmacia do tio Vini                 \n")
        console.log("************************************************************")
        console.log("               1 - Criar Produto                            ")
        console.log("               2 - Listar todas os Produtos                 ")
        console.log("               3 - Consultar Produto por ID                 ")
        console.log("               4 - Atualizar Produto                        ")
        console.log("               5 - Deletar Produto                          ")
        console.log("               0 - Sair                                     ")
        console.log("\n************************************************************\n")
        opcao = readlinesync.questionInt("Digite a opcao desejada: ")

        if (opcao === 0) {
            about();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(`\ncolocar as cores aqui!\n`)
                console.log("Digite o ID do produto: ")
                id = readlinesync.questionInt('')

                console.log("Escolha o Tipo do Produto: ")
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log("Digite o Nome do Produto: ")
                nome = readlinesync.question('')

                console.log("Digite o preco do produto: ")
                preco = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log("Digite o tipo de remedio: ")
                        generico = readlinesync.question('');
                        produtos.cadastrarProduto(new Medicamento(produtos.gerarNumero(), nome, tipo, preco, generico))
                        break;
                    case 2:
                        console.log("Digite qual a Fragancia: ")
                        fragancia = readlinesync.question('');
                        produtos.cadastrarProduto(new Cosmetico(produtos.gerarNumero(), nome, tipo, preco, fragancia))
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log(`\nTodos os Produtos: \n`)
                produtos.listarTodosProdutos();
                keyPress();
                break;

            case 3:

                console.log(`Digite o ID do Produto:`)
                id = readlinesync.questionInt("")

                produtos.procuraPorId(id);

                keyPress();
                break;

            case 4:
                keyPress();
                break;

            case 5:
                keyPress();
                break;

            default:
                console.log("Opcao invalida!")
        }

    } while (true)

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


function about() {
    console.log("\nSistema criado pelo desenvolvedor Vinicius Oliveira.\n")
}
main()