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

const calcularMedia = (n1, n2) => (n1 + n2) / 2;

function definirSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

const CORES = {
  Aprovado: "text-bg-success",
  Recuperação: "text-bg-warning",
  Reprovado: "text-bg-danger",
};

function criarCelula(texto) {
  const celula = document.createElement("td");
  celula.textContent = texto;
  return celula;
}

function criarSelo(situacao) {
  const selo = document.createElement("span");
  selo.className = `badge ${CORES[situacao]}`;
  selo.textContent = situacao;
  return selo;
}

function adicionarLinha(aluno) {
  const celulaSituacao = criarCelula("");
  celulaSituacao.append(criarSelo(aluno.situacao));

  const linha = document.createElement("tr");
  linha.append(
    criarCelula(aluno.nome),
    criarCelula(aluno.media.toFixed(1)),
    celulaSituacao,
  );
  tabela.append(linha);
}
