// HERO BUTTON

document.getElementById("explorar")
.addEventListener("click", () => {

  document.getElementById("sustentabilidade")
  .scrollIntoView({
    behavior:"smooth"
  });

});

// MODAL

const modal =
document.getElementById("modal");

function abrirModal(){

  modal.style.display = "flex";

}

document.getElementById("fecharModal")
.addEventListener("click", () => {

  fecharModal();

});

window.addEventListener("click", (e) => {

  if(e.target === modal){

    fecharModal();

  }

});

function fecharModal(){

  modal.style.display = "none";

}

// QUIZ

let pontos = 0;

function respostaCorreta(){

  pontos++;

  document.getElementById("resultado")
  .innerHTML =
  `✅ Resposta Correta! Pontos: ${pontos}`;

  document.getElementById("resultado")
  .style.color = "green";

  criarConfete();

}

function respostaErrada(){

  document.getElementById("resultado")
  .innerHTML =
  "❌ Resposta Errada!";

  document.getElementById("resultado")
  .style.color = "red";

}

// ACCORDION

const accordionBtns =
document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const content =
    btn.nextElementSibling;

    if(content.style.maxHeight){

      content.style.maxHeight = null;

    }

    else{

      document.querySelectorAll(".accordion-content")
      .forEach(item => {

        item.style.maxHeight = null;

      });

      content.style.maxHeight =
      content.scrollHeight + "px";

    }

  });

});

// ANIMAÇÃO AO ROLAR

const elementos =
document.querySelectorAll(
".painel,.tec-box,.contato-card,.grafico,.quiz-card"
);

function animarScroll(){

  const topoTela =
  window.innerHeight * 0.85;

  elementos.forEach(el => {

    const posicao =
    el.getBoundingClientRect().top;

    if(posicao < topoTela){

      el.style.opacity = "1";

      el.style.transform =
      "translateY(0)";

    }

  });

}

elementos.forEach(el => {

  el.style.opacity = "0";

  el.style.transform =
  "translateY(80px)";

  el.style.transition =
  "1s";

});

window.addEventListener("scroll",
animarScroll);

// CONFETE

function criarConfete(){

  for(let i = 0; i < 40; i++){

    const confete =
    document.createElement("div");

    confete.classList.add("confete");

    document.body.appendChild(confete);

    confete.style.left =
    Math.random() * window.innerWidth + "px";

    confete.style.background =
    `hsl(${Math.random()*360},100%,50%)`;

    confete.style.animationDuration =
    Math.random() * 3 + 2 + "s";

    setTimeout(() => {

      confete.remove();

    },5000);

  }

}

// CONFETE STYLE

const estilo =
document.createElement("style");

estilo.innerHTML = `

.confete{

  position:fixed;
  width:12px;
  height:12px;
  top:-20px;
  border-radius:50%;
  z-index:99999;
  animation:cair linear forwards;

}

@keyframes cair{

  to{

    transform:
    translateY(100vh)
    rotate(720deg);

    opacity:0;

  }

}

`;

document.head.appendChild(estilo);

// MENU ATIVO

const links =
document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

  let atual = "";

  document.querySelectorAll("section")
  .forEach(secao => {

    const topo =
    secao.offsetTop - 200;

    if(scrollY >= topo){

      atual = secao.getAttribute("id");

    }

  });

  links.forEach(link => {

    link.classList.remove("ativo");

    if(link.getAttribute("href")
    === "#" + atual){

      link.classList.add("ativo");

    }

  });

});

// TEXTO DIGITANDO

const titulo =
document.querySelector(".hero-texto h2");

const textoOriginal =
titulo.innerText;

titulo.innerText = "";

let i = 0;

function escrever(){

  if(i < textoOriginal.length){

    titulo.innerText +=
    textoOriginal.charAt(i);

    i++;

    setTimeout(escrever,80);

  }

}

escrever();

// RELÓGIO

const footer =
document.querySelector("footer");

setInterval(() => {

  const agora = new Date();

  footer.innerHTML = `
    🌿 Projeto Agrinho 2026 |
    ${agora.toLocaleTimeString()}
  `;

},1000);
