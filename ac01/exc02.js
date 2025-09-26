const area = document.getElementById("areaJogo");
const jogador1Btn = document.getElementById("jogador1");
const jogador2Btn = document.getElementById("jogador2");
const iniciarBtn = document.getElementById("iniciar");
const resultado = document.getElementById("resultado");
const placarEl = document.getElementById("placar");

let podeClicar = false;
let timeout;
let placar = { j1: 0, j2: 0 };

function iniciarRodada() {
  resultado.textContent = "";
  area.style.background = "gray";
  podeClicar = false;

  let tempoAleatorio = Math.floor(Math.random() * 3000) + 2000; // 2 a 5s

  timeout = setTimeout(() => {
    area.style.background = "green";
    podeClicar = true;
  }, tempoAleatorio);
}

function jogador1() {
  if (!podeClicar) return;
  resultado.textContent = "Jogador 1 Venceu!";
  placar.j1++;
  atualizarPlacar();
  resetarRodada();
}

function jogador2() {
  if (!podeClicar) return;
  resultado.textContent = "Jogador 2 Venceu!";
  placar.j2++;
  atualizarPlacar();
  resetarRodada();
}

function atualizarPlacar() {
  placarEl.textContent = 'Placar: Jogador 1: ' + placar.j1 + '| Jogador 2: ' + placar.j2;
}

function resetarRodada() {
  podeClicar = false;
  clearTimeout(timeout);
}

iniciarBtn.addEventListener("click", iniciarRodada);
jogador1Btn.addEventListener("click", jogador1);
jogador2Btn.addEventListener("click", jogador2);