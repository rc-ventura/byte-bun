
const URL_API = "https://byte-bun-ozqr.onrender.com"

// 01 exercicio fetch 
async function carregarCardapio() {
const resposta = await fetch(`${URL_API}/cardapio`);
const itens = await resposta.json();
console.log(itens);

popularSelect("selectPao", itens.filter((item => item.categoria === "pao")))
popularSelect("selectRecheio", itens.filter((item => item.categoria === "recheio")))
popularSelect("selectMolho", itens.filter((item => item.categoria === "molho"))) 

}

carregarCardapio()

//exercicio 03
const cupom = document.querySelector("#cupom");

function popularSelect(idSelect, itens) {
  const select = document.querySelector(`#${idSelect}`)
  for( let i = 0; i < itens.length; i++) {
    const item = itens[i]
    const option = document.createElement("option")
    option.value = item.nome
    option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`
    select.appendChild(option)
    }
}

document.querySelector("#btnCalcularPedido").addEventListener("click", async function () {
    const pao = document.querySelector("#selectPao").value;
    const recheio = document.querySelector("#selectRecheio").value;
    const molho = document.querySelector("#selectMolho").value;

    
      const resposta = await fetch(`${URL_API}/pedido`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({pao, recheio, molho}),
      });

      if(!resposta.ok) {
        const erro = await resposta.json();
        cupom.textContent = `Erro: ${erro.erro} || "Nao foi possivel calcular seu pedido "}`
        return;
      }

      const dados = await resposta.json();
      const totalFormatado = dados.total.toFixed(2)

      cupom.textContent = 
      `Pão: ${dados.itens.pao}\n` +
      `Recheio: ${dados.itens.recheio}\n`+
      `Molho: ${dados.itens.molho}\n`+
      `Total: ${totalFormatado}`;
     
})


