let totalDepedido = 0
let totalDoDia = 0

// parte do pedido atual 
const listaPedido = document.querySelector("#lista-pedido")
const spanTotal = document.querySelector("#total")
const btnFinalizar = document.querySelector("#btn-finalizar")

// elemento total do dia 
const spanTotaldia = document.querySelector("#total-dia")
const listaHistorico = document.querySelector("#historico")
const btnZerar = document.querySelector("#btn-zerar")

// elemento pai de todos os botões de produto
const divProdutos = document.querySelector("#produtos")

divProdutos.addEventListener("click", function(event){
    let botao = event.target
    // Faz a verificação
    if(botao.tagName === "BUTTON"){
        let nome = botao.dataset.nome
        let preco = Number(botao.dataset.preco)
    // Cria o elemento LI dentro UL para fazer a lista 

        let item = document.createElement("li")
        item.textContent = nome + "- R$" + preco
        listaPedido.appendChild(item)

    // Faz a soma do pedido e mostra na tela o resultado    
        totalDepedido = totalDepedido + preco 
        spanTotal.textContent = totalDepedido
    }
})

btnFinalizar.addEventListener("click", function() {
    // verifica se tem algum pedido ou não se não tiver ele retorna o alert
    if(totalDepedido === 0) {
        alert("Nenhum item no pedido!")
        return
    }

    // adiciona no histórico
    let itemHistorico = document.createElement("li")
    itemHistorico.textContent = "Venda: R$" + totalDepedido
    listaHistorico.appendChild(itemHistorico)

    // soma no total do dia
    totalDoDia = totalDoDia + totalDepedido
    spanTotaldia.textContent = totalDoDia

    // zera o pedido atual
    totalDepedido = 0
    spanTotal.textContent = 0
    listaPedido.innerHTML = ""
})

btnZerar.addEventListener("click", function() {
    if(confirm("Tem certeza que quer fechar o dia?")) {
        totalDoDia = 0
        spanTotaldia.textContent = 0
        listaHistorico.innerHTML = ""
    }
})