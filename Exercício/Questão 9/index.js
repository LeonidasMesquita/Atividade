const numeros = prompt("Digite uma lista de números separados por vírgula:"); // solicita que o usuário digite uma lista de números
const listaNumeros = numeros.split(","); // converte a lista de números em um array utilizando o método split()
const numerosOrdenados = listaNumeros.sort(function(a, b){return a - b}); // ordena os números em ordem crescente utilizando o método sort()

console.log("Os números em ordem crescente são: " + numerosOrdenados.join(", ")); // imprime a lista ordenada no console utilizando o método join()
