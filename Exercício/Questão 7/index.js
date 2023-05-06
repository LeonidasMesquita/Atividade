const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");
const cidade = prompt("Digite a cidade onde mora:");

const pessoa = { // cria o objeto pessoa com as informações digitadas pelo usuário
  nome: nome,
  idade: idade,
  cidade: cidade
};

console.log(pessoa); // imprime o objeto pessoa no console
