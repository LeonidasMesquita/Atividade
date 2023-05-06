const palavra = prompt("Digite uma palavra:"); // solicita que o usuário digite uma palavra
const palavraInvertida = palavra.split("").reverse().join(""); // inverte a palavra utilizando o método split(), reverse() e join()

if (palavra === palavraInvertida) { // verifica se a palavra original é igual à palavra invertida
  console.log(palavra + " é um palíndromo."); // imprime no console que a palavra é um palíndromo
} else {
  console.log(palavra + " não é um palíndromo."); // caso contrário, imprime no console que a palavra não é um palíndromo
}
