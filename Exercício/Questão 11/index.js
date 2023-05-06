const numeros = prompt("Digite uma lista de números separados por vírgula:"); // solicita que o usuário digite uma lista de números
const listaNumeros = numeros.split(",").map(Number); // converte a lista de números em um array e os converte em números utilizando o método split() e o método map()

function segundoMaiorNumero(lista) {
  const ordenados = lista.sort(function(a, b) { // utiliza o método sort() para ordenar a lista em ordem decrescente
    return b - a;
  });
  
  return ordenados[1]; // retorna o segundo elemento da lista ordenada
}

const segundoMaior = segundoMaiorNumero(listaNumeros); // chama a função segundoMaiorNumero() para encontrar o segundo maior número
console.log("O segundo maior número é: " + segundoMaior); // imprime o resultado no console
