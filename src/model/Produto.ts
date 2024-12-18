export abstract class Produto {

    //definição do modelo de dados (esses são os atributos do Produto)
    private _id : number;
    private _nome : string;
    private _tipo : number;
    private _preco : number;

    // Gerar o metodo construtor
	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

  //Gerar os metodos Getter's e Setter's

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}


	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

    //metodo visualizar
    public visualizar() {
        let tipo: string;

        switch(this._tipo) {
            case 1:
                tipo = "Medicamento"
                break;
            case 2:
                tipo = "Cosmetico"
                break;
            default:
                tipo = "Tipo de Produto Invalida"
        }
        console.log("************************************")
        console.log("\n      Informações do produto		 \n")
        console.log("************************************\n")
        console.log(`ID do Produto: ${this._id}`)
        console.log(`Nome do Produto: ${this._nome}`)
        console.log(`Tipo do Produto: ${tipo}`)
        console.log(`Preco do Produto: ${this._preco}`)
    }



}