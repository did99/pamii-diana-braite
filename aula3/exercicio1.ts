let produto: string = "Mouse";Add commentMore actions
let preco: number = 59.90;
let disponivel : boolean = true;

function exibirProduto(produto: string, preco: number, disponivel: boolean): void {
    console.log (`Produto: ${produto} - Preço: R$${preco} - Disponível: ${disponivel ? 'Sim' : 'Não'}`);
}

exibirProduto(produto, preco, disponivel);

console.log("a")