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
