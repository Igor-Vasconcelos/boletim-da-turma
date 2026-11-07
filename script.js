const formAluno = document.querySelector("#form-aluno");
const nome = document.querySelector("#nome");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const mensagem = document.querySelector("#mensagem");
const tabelaAlunos = document.querySelector("#tabela-alunos");
const resumo = document.querySelector("#resumo");

function lerNota(texto) {
  if (texto.trim() === "") return null;
  const nota = Number(texto.replace(",", "."));

  if (Number.isNaN(nota)) return null;
  if (nota < 0 || nota > 10) return null;
  return nota;
}


