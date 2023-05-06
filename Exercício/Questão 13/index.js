const nomes = prompt("Digite uma lista de nomes separados por vírgula:"); // solicita que o usuário digite uma lista de nomes
const listaNomes = nomes.split(","); // utiliza o método split() para separar os nomes em um array

function ordenarNomes(lista) {
  return lista.sort(); // utiliza o método sort() para ordenar os nomes em ordem alfabética
}

const nomesOrdenados = ordenarNomes(listaNomes); // chama a função ordenarNomes() para ordenar os nomes em ordem alfabética
console.log(nomesOrdenados); // imprime a lista de nomes ordenada no console
