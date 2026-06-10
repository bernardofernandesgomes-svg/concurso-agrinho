// MODAL
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");

function abrirModal() {
  if (modal) modal.style.display = "flex";
}

if (fecharModal && modal) {
  fecharModal.onclick = () => {
    modal.style.display = "none";
  };
}

// QUIZ
let pontos = 0;

function respostaCorreta() {
  pontos++;
  const resultado = document.getElementById("resultado");
  if (resultado) resultado.innerHTML = "✅ Pontuação: " + pontos;
}

function respostaErrada() {
  const resultado = document.getElementById("resultado");
  if (resultado) resultado.innerHTML = "❌ Resposta incorreta";
}

// CERTIFICADO
function mostrarCertificado() {
  const certificado = document.getElementById("certificado");
  if (!certificado) return;

  if (pontos >= 5) {
    certificado.style.display = "flex";
  } else {
    alert("Acerte todas as perguntas para ganhar o certificado!");
  }
}

function fecharCertificado() {
  const certificado = document.getElementById("certificado");
  if (certificado) certificado.style.display = "none";
}

// MODO ESCURO
const btnModoEscuro = document.getElementById("modoEscuro");
if (btnModoEscuro) {
  btnModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// VOLTAR AO TOPO
const btnTopo = document.getElementById("topo");
if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// CONTADORES
function animarContador(id, final) {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  let numero = 0;
  let intervalo = setInterval(() => {
    numero += Math.ceil(final / 100);

    if (numero >= final) {
      numero = final;
      clearInterval(intervalo);
    }
    elemento.innerHTML = numero.toLocaleString();
  }, 20);
}

// Inicialização dos contadores de forma segura
document.addEventListener("DOMContentLoaded", () => {
  animarContador("contador1", 15000);
  animarContador("contador2", 500000);
  animarContador("contador3", 2500);
  animarContador("arvores", 35000);
});

// ACCORDION
const botoes = document.querySelectorAll(".accordion-btn");
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const conteudo = botao.nextElementSibling;
    if (!conteudo) return;

    if (conteudo.style.maxHeight) {
      conteudo.style.maxHeight = null;
    } else {
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
    }
  });
});

// ANIMAÇÃO AO ROLAR
const elementos = document.querySelectorAll(".painel, .tec-box, .grafico, .contato-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
    }
  });
});

elementos.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = ".8s";
  observer.observe(el);
});

// DICAS
const dicas = [
  "Economize água fechando a torneira enquanto escova os dentes.",
  "Separe o lixo reciclável do lixo comum.",
  "Utilize lâmpadas de LED para economizar energia.",
  "Evite desperdício de alimentos.",
  "Plante árvores e preserve áreas verdes.",
  "Utilize energia solar sempre que possível."
];

function trocarDica() {
  const dicaBox = document.getElementById("dicaBox");
  if (!dicaBox) return;
  
  const numero = Math.floor(Math.random() * dicas.length);
  dicaBox.innerHTML = dicas[numero];
}

// RELÓGIO
function atualizarHora() {
  const horaAtual = document.getElementById("horaAtual");
  if (!horaAtual) return;

  const agora = new Date();
  let h = agora.getHours().toString().padStart(2, "0");
  let m = agora.getMinutes().toString().padStart(2, "0");
  let s = agora.getSeconds().toString().padStart(2, "0");

  horaAtual.innerHTML = `${h}:${m}:${s}`;
}
setInterval(atualizarHora, 1000);
atualizarHora();

// CONTROLE DO MENU LATERAL (SIDEBAR)
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const conteudo = document.querySelector(".conteudo");
  const abrirMenu = document.getElementById("abrirMenu");
  const fecharMenu = document.getElementById("fecharMenu");

  if (!sidebar) return;

  if (abrirMenu) {
    abrirMenu.onclick = () => {
      sidebar.classList.add("aberta");
      sidebar.classList.remove("fechada");
      if (conteudo) conteudo.classList.remove("menu-fechado");
    };
  }

  if (fecharMenu) {
    fecharMenu.onclick = () => {
      sidebar.classList.remove("aberta");
      sidebar.classList.add("fechada");
      if (conteudo) conteudo.classList.add("menu-fechado");
    };
  }
});
