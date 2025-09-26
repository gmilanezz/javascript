const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const btn = document.getElementById("btnTrocar");

let cores = ["vermelho", "amarelo", "verde"];
let index = 0;

function atualizarLuz() {
  vermelho.style.background = "gray";
  amarelo.style.background = "gray";
  verde.style.background = "gray";

  if (cores[index] === "vermelho") vermelho.style.background = "red";
  if (cores[index] === "amarelo") amarelo.style.background = "yellow";
  if (cores[index] === "verde") verde.style.background = "green";
}

btn.addEventListener("click", () => {
  index = (index + 1) % cores.length;
  atualizarLuz();
});

atualizarLuz();