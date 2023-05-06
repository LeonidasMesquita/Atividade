const numeros = prompt("Digite uma lista de números separados por vírgula:"); // solicita que o usuário digite uma lista de números
const listaNumeros = numeros.split(",").map(Number); // converte a lista de números em um array e os converte em números utilizando o método split() e o método map()
const soma = listaNumeros.reduce((total, numero) => total + numero, 0); // utiliza o método reduce() para calcular a soma dos números
const media = soma / listaNumeros.length; // calcula a média dos números

console.log("A média dos números é: " + media.toFixed(2)); // imprime o resultado no console utilizando o método toFixed() para limitar o número de casas decimais
