let pontos = 0;

function correta(){
pontos++;
document.getElementById("resultado").innerHTML =
"✅ Resposta correta! Pontos: " + pontos;
}

function errada(){
document.getElementById("resultado").innerHTML =
"❌ Resposta incorreta!";
}

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

let numero = 0;

const contador = document.getElementById("contador");

const intervalo = setInterval(()=>{

```
numero++;

contador.innerHTML = numero;

if(numero >= 500){
    clearInterval(intervalo);
}
```

},10);

document.getElementById("topo").addEventListener("click",()=>{

```
window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

});

const observer = new IntersectionObserver((entries)=>{

```
entries.forEach(entry=>{

    if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
    }

});
```

});

document.querySelectorAll(".card").forEach(card=>{

```
card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = ".8s";

observer.observe(card);
```

});
