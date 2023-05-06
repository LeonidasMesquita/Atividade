const informacoes = {
    nome: prompt("Digite o seu nome:"),
    idade: prompt("Digite a sua idade:"),
    celular: prompt("Digite o seu número de celular:"),
    cidade: prompt("Digite a cidade onde mora:")
  }; // cria um objeto com as informações digitadas pelo usuário
  
  let alterar = prompt("Deseja alterar alguma informação? (sim/não)"); // pergunta se o usuário deseja alterar alguma informação
  
  if (alterar === "sim") { // caso o usuário deseje alterar alguma informação
    console.log("Informações já digitadas:");
    console.log(informacoes); // imprime as informações já digitadas pelo usuário
    const alteracao = prompt("Qual informação deseja alterar? (nome/idade/celular/cidade)"); // pergunta qual informação o usuário deseja alterar
    informacoes[alteracao] = prompt(`Digite a nova informação de ${alteracao}:`); // solicita que o usuário digite a nova informação e a substitui no objeto
  }
  
  console.log("Objeto antes da alteração:");
  console.log(informacoes); // imprime o objeto antes da alteração
  