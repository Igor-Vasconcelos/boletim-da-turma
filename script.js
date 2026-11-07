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

const turma = [];

function atualizarResumo() {
  let soma = 0;
  let aprovados = 0;
  for (const alunos of alunos) {
    soma = soma + aluno.media;
    if (aluno.situacao === "Aprovado") aprovados = aprovados + 1;
  }
  const mediaTurma = soma / turma.length;
  resumo.textContent = `Média: ${mediaTurma.toFixed(1)} | Aprovados: ${aprovados}/${turma.length}`;
}

formAluno.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nomeAluno = nome.value.trim();
  const n1 = lerNota(nota1.value);
  const n2 = lerNota(nota2.value);

  if (nomeAluno === "" || n1 === null || n2 === null) {
    mensagem.textContent = "Preencha o nome e duas notas de 0 a 10.";
    return;
  }
  mensagem.textContent = "";

  const media = calcularMedia(n1, n2);
  const situacao = definirSituacao(media);
  const aluno = { nome: nomeAluno, media: media, situacao: situacao };
  turma.push(aluno);
  adicionarLinha(aluno);
  atualizarResumo();
  form.reset();
});
