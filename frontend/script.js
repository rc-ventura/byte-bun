//------ exercicio 01: console.log ----
console.log("Bem vindo a Byte Bun");

// ------ exercicio 02: Mudando o texto da pagina ----
const botaoSaudacao = document.querySelector("#btnSaudacao");
const mensagem = document.querySelector("#mensagem");

botaoSaudacao.addEventListener("click", function () {
  
  alert("Bem vindo a Byte Bun! Pronto para pedir?")
  mensagem.textContent = "Bem vindo a Bite Bun! Pronto para pedir?"
})

//------ Exercicio 3: exibindo um preco do cardapio--
const resultado = document.querySelector("#resultado");
const btnFrances = document.querySelector("#btnFrances");
const btnIntegral = document.querySelector("#btnIntegral");
const btnCiabatta = document.querySelector("#btnCiabatta");

btnFrances.addEventListener("click", function() {
  resultado.textContent = "Frances R$ 1,50";
})

btnIntegral.addEventListener("click", function() {
    resultado.textContent = "Integral R$ 2,00";

})

btnCiabatta.addEventListener("click", function() {
    resultado.textContent = "Ciabatta R$ 2,50";

})

//----Exercicio 4 - Lendo um valor digitado --
const inputQuantidade = document.querySelector("#quantidade");
const btnCalcular = document.querySelector("#btnCalcular")
const total = document.querySelector("#total");

const PRECO_UNITARIO = 8.0;

btnCalcular.addEventListener("click", function() {
  const quantidade = Number(inputQuantidade.value);

  if(!quantidade || quantidade <= 0) {
    total.textContent = "Digite uma quantidade valida";
    return;
  }
  const valorTotal = quantidade * PRECO_UNITARIO;
  total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
})


///----- aula 03 --------
// exercicio 01 - Primeiro Fetch
async function carregarCardapio() {
  const resposta = await fetch("http://localhost:3000/cardapio")
  const dados = await resposta.json()
  console.log(dados)
}

carregarCardapio()