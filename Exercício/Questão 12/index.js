const texto = prompt("Digite um texto:"); // solicita que o usuário digite um texto
const palavras = texto.toLowerCase().split(" "); // converte todas as letras do texto para minúsculas e utiliza o método split() para separar o texto em palavras

function contarPalavras(lista) {
  const contagem = {}; // cria um objeto vazio para armazenar a contagem de palavras
  
  for (let i = 0; i < lista.length; i++) {
    const palavra = lista[i];
    if (contagem[palavra]) {
      contagem[palavra]++; // se a palavra já existir no objeto de contagem, incrementa a contagem
    } else {
      contagem[palavra] = 1; // se a palavra não existir no objeto de contagem, cria uma nova chave com o valor 1
    }
  }
  
  return contagem;
}

const resultado = contarPalavras(palavras); // chama a função contarPalavras() para contar as palavras do texto e armazenar a contagem em um objeto
console.log(resultado); // imprime o objeto com a contagem de palavras no console
