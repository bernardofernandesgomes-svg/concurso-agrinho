// MODAL

const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");

function abrirModal(){
modal.style.display = "flex";
}

fecharModal.onclick = () =>{
modal.style.display = "none";
};

// QUIZ

let pontos = 0;

function respostaCorreta(){

pontos++;

document.getElementById("resultado").innerHTML =
"✅ Pontuação: " + pontos;

}

function respostaErrada(){

document.getElementById("resultado").innerHTML =
"❌ Resposta incorreta";

}

// CERTIFICADO

function mostrarCertificado(){

if(pontos >= 5){

document.getElementById("certificado").style.display =
"flex";

}else{

alert("Acerte todas as perguntas para ganhar o certificado!");

}

}

function fecharCertificado(){

document.getElementById("certificado").style.display =
"none";

}

// MODO ESCURO

document.getElementById("modoEscuro")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

// VOLTAR AO TOPO

document.getElementById("topo")
.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// CONTADORES

function animarContador(id,final){

let numero = 0;

let intervalo = setInterval(()=>{

numero += Math.ceil(final/100);

if(numero >= final){

numero = final;

clearInterval(intervalo);

}

document.getElementById(id).innerHTML =
numero.toLocaleString();

},20);

}

animarContador("contador1",15000);
animarContador("contador2",500000);
animarContador("contador3",2500);
animarContador("arvores",35000);

// ACCORDION

const botoes =
document.querySelectorAll(".accordion-btn");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

const conteudo =
botao.nextElementSibling;

if(conteudo.style.maxHeight){

conteudo.style.maxHeight = null;

}else{

conteudo.style.maxHeight =
conteudo.scrollHeight + "px";

}

});

});

// ANIMAÇÃO AO ROLAR

const elementos =
document.querySelectorAll(
".painel,.tec-box,.grafico,.contato-card"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

});

elementos.forEach(el=>{

el.style.opacity = "0";
el.style.transform =
"translateY(40px)";
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

function trocarDica(){

const numero =
Math.floor(Math.random()*dicas.length);

document.getElementById("dicaBox").innerHTML =
dicas[numero];

}

// RELÓGIO

function atualizarHora(){

const agora = new Date();

let h = agora.getHours();
let m = agora.getMinutes();
let s = agora.getSeconds();

h = h.toString().padStart(2,"0");
m = m.toString().padStart(2,"0");
s = s.toString().padStart(2,"0");

document.getElementById("horaAtual").innerHTML =
`${h}:${m}:${s}`;

}

setInterval(atualizarHora,1000);

atualizarHora();
document.addEventListener("DOMContentLoaded", () => {

const sidebar = document.querySelector(".sidebar");

const abrirMenu = document.getElementById("abrirMenu");

const fecharMenu = document.getElementById("fecharMenu");

if(fecharMenu){

fecharMenu.onclick = () => {

sidebar.style.display = "none";

};

}

if(abrirMenu){

abrirMenu.onclick = () => {

sidebar.style.display = "block";

};

}

});
